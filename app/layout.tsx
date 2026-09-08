import type { Metadata } from 'next';
import { siteUrl } from './profile';
import './globals.css';
const title = 'Bilal Muhazzin | Digital Marketing & SEO Specialist in Mangaluru';
const description = 'Bilal Muhazzin is a digital marketing specialist in Mangaluru, India. Explore his experience in SEO, Google Ads, Meta Ads, social media and lead generation.';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title, description,
  alternates: { canonical: '/' },
  authors: [{ name: 'Bilal Muhazzin', url: siteUrl }],
  openGraph: { title, description, url: siteUrl, siteName: 'Bilal Muhazzin', type: 'profile', firstName: 'Bilal', lastName: 'Muhazzin', locale: 'en_IN' },
  twitter: { card: 'summary', title, description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
