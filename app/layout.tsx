import type { Metadata, Viewport } from 'next';
import { siteUrl } from './profile';
import './globals.css';
const title = 'Bilal Muhazzin | Digital Marketing Specialist in Mangaluru';
const description = 'Digital Marketing Specialist at Komquest Solutions in Mangaluru. Explore Bilal Muhazzin’s SEO, Google Ads, Meta Ads and social media experience.';
// Optional, set at build time. Leave unset to ship without analytics or a Search Console tag.
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const shareImage = { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Bilal Muhazzin, Digital Marketing Specialist in Mangaluru' };
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title, description,
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
  alternates: { canonical: `${siteUrl}/` },
  authors: [{ name: 'Bilal Muhazzin', url: siteUrl }],
  openGraph: { title, description, url: `${siteUrl}/`, siteName: 'Bilal Muhazzin', type: 'profile', firstName: 'Bilal', lastName: 'Muhazzin', locale: 'en_IN', images: [shareImage] },
  twitter: { card: 'summary_large_image', title, description, images: [shareImage] },
  verification: googleVerification ? { google: googleVerification } : undefined,
};
export const viewport: Viewport = { themeColor: '#0b0b0d', colorScheme: 'dark' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><head>
    <link rel="preload" href="/fonts/Anton-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    {gaId && <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} />
      <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});` }} />
    </>}
  </head><body>{children}</body></html>;
}
