import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n";
import { SITE_URL, PERSON } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});


const DESCRIPTION =
  "Computer Science student focused on full-stack development, machine learning, and solving real-world problems through code. B.Tech CSE at SRM AP University.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gireesh — Computer Science Student & Developer",
    template: "%s",
  },
  description: DESCRIPTION,
  openGraph: {
    title: "Gireesh — Computer Science Student & Developer",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Gireesh — Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gireesh — Computer Science Student & Developer",
    description: DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  jobTitle: PERSON.jobTitle,
  email: `mailto:${PERSON.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Andhra Pradesh", addressCountry: "IN" },
  url: SITE_URL,
  sameAs: PERSON.sameAs,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
