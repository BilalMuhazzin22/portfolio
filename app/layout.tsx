import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Bilal Muhazzin — SEO, Data & Growth',
  description: 'Bilal Muhazzin. SEO, data analysis and growth. Based in Mangaluru, India.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
