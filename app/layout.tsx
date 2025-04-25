import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WebCraft Studios | Professional Web Development Agency',
  description: 'WebCraft Studios is a professional web development agency specializing in creating modern, high-performance websites and web applications.',
  keywords: 'web development, web design, UI/UX design, responsive design, web applications, e-commerce, SEO optimization',
  authors: [{ name: 'WebCraft Studios' }],
  creator: 'WebCraft Studios',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webcraft-studios.com',
    title: 'WebCraft Studios | Professional Web Development Agency',
    description: 'Professional web development services tailored to your business needs.',
    siteName: 'WebCraft Studios',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebCraft Studios | Professional Web Development Agency',
    description: 'Professional web development services tailored to your business needs.',
    creator: '@webcraftstudios',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}