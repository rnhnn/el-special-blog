import Image from 'next/image';
import { getPostBySlug } from '@/helpers/loadPosts';
import { formatDate } from '@/helpers/formatDate';
import { renderEntryContent } from '@/helpers/renderEntryContent';

export default async function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  return (
    <>
      <main className="blog">
        <article className="blog-entry">
          <time className="blog-entry-date">{formatDate(post.date)}</time>
          <h1
            className="blog-entry-title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
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
      </main>
    </>
  );
}
