import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dibumi.com"),
  title: "dibumi.com — Software House & Cloud DevOps Partner | Surabaya, Indonesia",
  description:
    "Perusahaan rekayasa perangkat lunak dan konsultan IT terpercaya di Surabaya, Indonesia. Melayani Custom Software Development, Company Profile Korporat, Aplikasi Android Native, Jasa WebView Android (Play Store Ready), dan Kelola Server & DevOps.",
  keywords: [
    "software house surabaya",
    "custom software development indonesia",
    "jasa pembuatan webview android",
    "kelola server devops surabaya",
    "jasa pembuatan aplikasi android",
    "jasa company profile perusahaan",
    "it consultant surabaya",
    "dibumi",
    "dibumi.com",
  ],
  authors: [{ name: "dibumi.com — Software House Surabaya" }],
  openGraph: {
    title: "dibumi.com — Software House & Cloud DevOps Partner",
    description:
      "Partner teknologi strategis berbasis di Surabaya, Indonesia. Menghadirkan solusi Custom Software, Android App, WebView Play Store, Website Korporat, dan Infrastruktur Server berstandar enterprise.",
    url: "https://dibumi.com",
    siteName: "dibumi.com",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "dibumi.com — Software House & Cloud DevOps Partner",
    description:
      "Solusi rekayasa digital terpercaya: Custom Software, Android, WebView, Website Korporat, dan Manajemen Server.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Playfair+Display:ital,wght@0,600;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
