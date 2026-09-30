import './globals.css';
import AppLayout from '@/components/common/AppLayout';

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
  ],
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#061233] text-white min-h-screen antialiased selection:bg-[#0E37A4] selection:text-white">
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}

