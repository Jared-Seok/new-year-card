import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "안녕하세요. 석지원입니다",
    template: "%s | 안녕하세요. 석지원입니다",
  },
  description: "소중한 분들께 신년 인사를 전합니다",
  openGraph: {
    title: "안녕하세요. 석지원입니다",
    description: "병오년 새해, 소중한 마음을 담아 전합니다.",
    url: "https://jaredseok-new-year.vercel.app",
    siteName: "안녕하세요. 석지원입니다",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "안녕하세요. 석지원입니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안녕하세요. 석지원입니다",
    description: "병오년 새해, 소중한 마음을 담아 전합니다.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
