import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NewsHub - Your Premier News Destination',
  description: 'Stay informed with the latest breaking news, in-depth analysis, and exclusive stories from around the world.',
  keywords: 'news, breaking news, world news, politics, technology, sports, business',
  authors: [{ name: 'NewsHub Team' }],
  openGraph: {
    title: 'NewsHub - Your Premier News Destination',
    description: 'Stay informed with the latest breaking news and exclusive stories.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}