import Image from 'next/image';
import Link from 'next/link';
import meAndMy3ds from '@/../public/images/about/me-and-my-3ds.webp';

export default function AboutPage() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-image">
          <Image
            src={meAndMy3ds}
            alt="Me and my 3DS"
            width={250}
            height={0}
            className="about-image-element"
          />
        </div>

        <div className="about-text">
          <h2 className="about-title">Rolando Hernández</h2>
          <p>Hello, reader!</p>

          <p>
            I’m building this site around my love for video games... and mostly
            as a consequence of my obsessive traits. It kinda started in 2020,
            with a CSS experiment that is now my{' '}
            <Link href="/compendium">Compendium</Link>, and it grew significantly at
            the end of 2023 with the first entry of the{' '}
            <Link href="/">Blog</Link>.
          </p>

          <p>
            Hopefully, it’ll keep growing—and it’ll be all thanks to my lovely
            girlfriend <a href="https://valstuff.com" target="_blank">Val</a>, who helps me
            improve my English writing in every post, and to my childhood friend{' '}
            <a href="https://vicfernandez.com/" target="_blank">Vic</a>, who gave the site its
            slick design.
          </p>

          <p>
            If you want, you can write me at:{' '}
            <a className="about-link" href="mailto:rolandohernandezleal@gmail.com">
              rolandohernandezleal@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
