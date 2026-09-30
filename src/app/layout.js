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
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#061233] text-white min-h-screen antialiased selection:bg-[#0E37A4] selection:text-white">
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}

