import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getImageUrl } from '@/lib/getImageUrl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magistrala',
  description: 'Connect and Visualize your Devices',
  icons: {
    icon: [
      {
        url: getImageUrl("favicon.png")
      }
    ]
  }
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
