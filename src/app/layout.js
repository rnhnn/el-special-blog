import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: 'The Special Blog',
  description: 'A footy manager tales blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}