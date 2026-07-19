import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import { BookingModalProvider } from "@/components/BookingModalContext";
import DisclaimerModal from "@/components/DisclaimerModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advocate Jaya Sharma & Associates | Nashik",
  description:
    "Advocate Jaya Sharma & Associates — expert legal counsel in corporate law, civil litigation, family law, criminal defense, property law, and legal documentation. Serving Nashik since 2010.",
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
      <body className="min-h-full flex flex-col bg-background text-[#2d2e39]">
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
