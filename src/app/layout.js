import { Plus_Jakarta_Sans, Space_Grotesk, Caveat } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'SCALARK | Business Systems Architecture & Growth Platform',
  description:
    'SCALARK helps startups, entrepreneurs, SMEs and MSMEs solve business growth, sales, operations, finance, KPI, process and technology challenges. Find the Problem. Fix the System. Scale the Business.',
  keywords: [
    'SCALARK',
    'business systems',
    'SME operations',
    'startup growth',
    'KPI management',
    'SOP processes',
    'business architecture'
  ]
};

import AppLayout from '@/components/common/AppLayout';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${spaceGrotesk.variable} ${caveat.variable}`}>
      <body className="bg-black text-white min-h-screen antialiased selection:bg-[#FFFFFF] selection:text-black">
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}

