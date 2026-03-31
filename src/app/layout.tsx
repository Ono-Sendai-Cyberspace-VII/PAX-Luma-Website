import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "PAX:Luma | Embodied Synthetic Intelligence by NYO",
    template: "%s | PAX:Luma by NYO",
  },
  description:
    "Thinking requires a mind. Understanding requires a body. PAX:Luma is the attempt to build a synthetic construct with both — grounded in first principles, built for real understanding.",
  keywords: [
    "PAX:Luma",
    "NYO",
    "Ichinyo Corporation",
    "embodied intelligence",
    "synthetic construct",
    "AI",
    "artificial intelligence",
    "Archai",
  ],
  authors: [{ name: "Cameron C. Scott" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nyo.ai",
    siteName: "PAX:Luma by NYO",
    title: "PAX:Luma | Embodied Synthetic Intelligence",
    description:
      "Thinking requires a mind. Understanding requires a body.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PAX:Luma | Embodied Synthetic Intelligence",
    description:
      "Thinking requires a mind. Understanding requires a body.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-nyo-black text-nyo-white min-h-screen antialiased">
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
