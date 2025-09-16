import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/helpers/loadPosts';
import { formatDate } from '@/helpers/formatDate';
import { renderEntryContent } from '@/helpers/renderEntryContent';

// Define all possible slugs so the pages can be generated ahead of time
export function generateStaticParams() {
  const posts = getAllPosts(); // Load all posts
  return posts.map(post => ({ slug: post.slug })); // Return array of slug params for static generation
}

// Server Component for individual blog post page
export default async function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug); // Load the post by its internal slug

  return (
    <main className="blog">
      <main className="blog-entry">
        <time className="blog-entry-date">{formatDate(post.date)}</time>
        <h1 className="blog-entry-title" dangerouslySetInnerHTML={{ __html: post.title }} />
        <Image
          className="blog-entry-image"
          src={`/images/blog/${post.image}`}
          alt={post.alt}
          width={637}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="blog-entry-content">
          {renderEntryContent(post.content)} {/* Render the post content blocks (paragraphs, etc.) */}
        </div>
      </main>
    </main>
  );
}