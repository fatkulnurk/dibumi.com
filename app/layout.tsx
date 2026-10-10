import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

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
    <html lang="id" className={sans.variable}>
      <body className="font-sans antialiased text-slate-900 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
