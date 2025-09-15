import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: 'El Special Blog',
  description: 'A footy manager tales blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/rss.xml"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@monaspace/font@1.0.0/monaspace.css"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}