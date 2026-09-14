import type { Metadata } from 'next';
import { siteUrl } from './profile';
import './globals.css';
const title = 'Bilal Muhazzin | Digital Marketing Specialist in Mangaluru';
const description = 'Digital Marketing Specialist at Komquest Solutions in Mangaluru. Explore Bilal Muhazzin’s SEO, Google Ads, Meta Ads and social media experience.';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title, description,
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: '/' },
  authors: [{ name: 'Bilal Muhazzin', url: siteUrl }],
  openGraph: { title, description, url: siteUrl, siteName: 'Bilal Muhazzin', type: 'profile', firstName: 'Bilal', lastName: 'Muhazzin', locale: 'en_IN' },
  twitter: { card: 'summary', title, description },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>{children}</body></html>;
}
