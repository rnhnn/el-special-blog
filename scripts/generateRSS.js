import fs from 'fs';
import path from 'path';
import { getAllPosts } from '../src/helpers/loadPosts.js';

const siteURL = 'https://elspecialblog.com';
const faviconURL = `${siteURL}/favicon.png`;
const rssURL = `${siteURL}/rss.xml`;
const posts = getAllPosts();

const itemsXml = posts
  .map((post) => {
    const cleanTitle = post.title.replace(/<[^>]+>/g, '');

    const contentHtml = post.content
      .map((block) => `<p>${block.html}</p>`)
      .join('')
      .replace(/href="\/([^"]*)"/g, `href="${siteURL}/$1"`)
      .replace(/src="\/([^"]*)"/g, `src="${siteURL}/$1"`);

    const fullContent = `
      <img src="${siteURL}/images/blog/${post.image}" alt="${post.alt}" />
      ${contentHtml}
    `;

    const firstParagraph = post.content[0]?.html
      ? post.content[0].html.replace(/<[^>]+>/g, '')
      : cleanTitle;

    return `
      <item>
        <title><![CDATA[${cleanTitle}]]></title>
        <link>${siteURL}/${post.slug}</link>
        <guid>${siteURL}/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${firstParagraph}]]></description>
        <content:encoded><![CDATA[${fullContent}]]></content:encoded>
      </item>
    `;
  })
  .join('');

const rssXml = `
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/" 
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>El Special Blog</title>
    <link>${siteURL}</link>
    <description>A site about video games</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${rssURL}" rel="self" type="application/rss+xml" />
    <image>
      <url>${faviconURL}</url>
      <title>El Special Blog</title>
      <link>${siteURL}</link>
    </image>
    ${itemsXml}
  </channel>
</rss>
`.trim();

const rssPath = path.join(process.cwd(), 'public', 'rss.xml');
fs.writeFileSync(rssPath, rssXml);

console.log('RSS feed generated at public/rss.xml');