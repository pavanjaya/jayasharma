import type { Metadata } from "next";
import DisclaimerModal from "@/components/DisclaimerModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased scroll-smooth">
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        rel="stylesheet"
        href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        precedence="default"
      />
      <body className="min-h-full flex flex-col bg-background text-neutral-900">
        <DisclaimerModal />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
