import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dibumi.com"),
  title: "dibumi.com — Engineering What's Next | Custom Software & Cloud Solutions",
  description:
    "Perusahaan pengembangan software berbasis di Surabaya, Indonesia. Kami membangun custom software, website perusahaan, aplikasi Android, WebView Android, dan infrastruktur server yang andal.",
  keywords: [
    "custom software development",
    "jasa pembuatan webview android",
    "kelola server devops",
    "custom android apps",
    "jasa company profile perusahaan",
    "pembuatan website cepat",
    "dibumi",
    "software house indonesia",
  ],
  authors: [{ name: "dibumi.com Team" }],
  openGraph: {
    title: "dibumi.com — Engineering What's Next",
    description:
      "Perusahaan teknologi dari Surabaya yang membantu bisnis membangun software, aplikasi Android, website, dan infrastruktur digital yang siap berkembang.",
    url: "https://dibumi.com",
    siteName: "dibumi.com",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dibumi.com — Engineering What's Next",
    description: "Custom Software Development, Android, WebView & High-Performance Server Management.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080809",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,600;1,400;1,600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-teal-500/30 selection:text-teal-200">
        {children}
      </body>
    </html>
  );
}
