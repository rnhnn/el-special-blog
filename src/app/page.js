import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/helpers/loadPosts';
import { formatDate } from '@/helpers/formatDate';

export default async function HomePage() {
  const posts = getAllPosts(); // Load all posts

  return (
    <main className="blog blog-home">
      {posts.map((post) => {
        // Grab the first paragraph only
        const firstParagraph = post.content.find(
          (block) => block.type === 'paragraph'
        );

        return (
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
              {firstParagraph && (
                <p dangerouslySetInnerHTML={{ __html: firstParagraph.html }} />
              )}
              <Link href={`/${post.slug}`} className="blog-entry-button">
                Continue reading
              </Link>
            </div>
          </article>
        );
      })}
    </main>
  );
}