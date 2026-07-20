import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import { BookingModalProvider } from "@/components/BookingModalContext";
import DisclaimerModal from "@/components/DisclaimerModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "General information about Advocate Jaya Sharma's legal practice in Nashik — practice areas include corporate law, civil litigation, family law, criminal defense, property law, and legal documentation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Advocate Jaya Sharma & Associates | Nashik",
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Advocate Jaya Sharma & Associates",
    title: "Advocate Jaya Sharma & Associates | Nashik",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/advocate-jaya-sharma-about.jpg",
        width: 1160,
        height: 522,
        alt: "Advocate Jaya Sharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Jaya Sharma & Associates | Nashik",
    description: SITE_DESCRIPTION,
    images: ["/advocate-jaya-sharma-about.jpg"],
  },
};

const attorneyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Advocate Jaya Sharma",
  image: `${SITE_URL}/advocate-jaya-sharma-about.jpg`,
  url: SITE_URL,
  telephone: "+91-9986758567",
  email: "advjayaosharma@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chamber No. 16, Maruti Chambers, District Court",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    postalCode: "422002",
    addressCountry: "IN",
  },
  areaServed: "Nashik, Maharashtra",
  sameAs: [
    "https://www.facebook.com/advjayasharma",
    "https://www.instagram.com/advjayasharma/",
    "https://www.linkedin.com/in/jayajangid/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} h-full antialiased`}
    >
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        precedence="default"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneyJsonLd) }}
      />
      <body className="min-h-full flex flex-col bg-background text-[#3d0b3d]">
        <BookingModalProvider>
          <DisclaimerModal />
          <Header />
          <main className="flex-1">
            <MotionProvider>{children}</MotionProvider>
          </main>
          <Footer />
        </BookingModalProvider>
      </body>
    </html>
  );
}
