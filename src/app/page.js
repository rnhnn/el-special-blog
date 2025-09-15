import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/helpers/loadPosts';
import { formatDate } from '@/helpers/formatDate';
import { renderEntryContent } from '@/helpers/renderEntryContent';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="blog">
      {posts.map((post) => (
        <article className="blog-entry" key={post.slug}>
          <time className="blog-entry-date">{formatDate(post.date)}</time>
          <h2 className="blog-entry-title">
            <Link href={`/${post.slug}`}>
              <span dangerouslySetInnerHTML={{ __html: post.title }} />
            </Link>
          </h2>
          <Image
            className="blog-entry-image"
            src={`/images/blog/${post.image}`}
            alt={post.alt}
            width={637}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="blog-entry-content">
            {renderEntryContent(post.content)}
          </div>
        </article>
      ))}
    </main>
  );
}