
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gouri Group | Granite & Marble Exporters Since 1985",
  description: "Al Falah Marble Supplier & Exporter – Gouri Group. Premium granite, marble, and sandstone. Exporting globally since 1985 from Kishangarh, Rajasthan.",
  keywords: "granite exporters, marble suppliers, Kishangarh marble, natural stones India, sandstone dealer, Gouri Group, Al Falah Marble Exporters, alfalahexports.com",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Gouri Group | Granite & Marble Exporters Since 1985",
    description: "Premium granite, marble, and sandstone from India. Trusted exporters since 1985.",
    images: [
      {
        url: "https://alfalahexports.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gouri Group - Premium Granite & Marble Exporters",
      }
    ],
    url: "https://alfalahexports.com",
    siteName: "Gouri Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gouri Group | Granite & Marble Exporters Since 1985",
    description: "Premium granite, marble, and sandstone from India. Trusted exporters since 1985.",
    images: ["https://alfalahexports.com/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${pacifico.variable} ${inter.variable}`}
      >
        {children}
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `emailjs.init("Twl1RhZCacvrwcklO");`
        }}></script>
      </body>
    </html>
  );
}
