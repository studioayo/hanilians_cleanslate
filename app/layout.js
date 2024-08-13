import Local from 'next/font/local';
import Header from "./(_components)/Header";
import "./globals.css";

const Pretendard = Local({ src: "../public/fonts/PretendardVariable.woff2" });

export const metadata = {
  metadataBase: new URL('https://cleanslate.hanilians.xyz'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  title: "클린슬레이트 프로그램 | 한일리안",
  description: "한일리안을 위한 종합 콘텐츠 웹사이트, 한일리안입니다! 급식부터 메모, 시간표 알림, 일정표까지 한일고 생활을 한층 더 편리하게.",
  openGraph: {
    title: "클린슬레이트 프로그램 | 한일리안",
    description: "37기 클린슬레이트 프로그램으로 iPad를 학습용 전자기기로 사용해보세요!",
    url: "https://cleanslate.hanilians.xyz",
    siteName: "한일리안",
    images: [
      {
        url: "/og/og-image.png", // 실제 이미지 URL로 교체해야 합니다
        width: 1200,
        height: 630,
        alt: "37기 클린슬레이트 프로그램",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "클린슬레이트 프로그램 | 한일리안",
    description: "37기 클린슬레이트 프로그램으로 iPad를 학습용 전자기기로 사용해보세요!",
    images: ["/og/og-image.png"], // 실제 이미지 URL로 교체해야 합니다
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="scroll-smooth">
        <body className={`${Pretendard.className} bg-pastell-purple`}>
          <Header />
          {children}
        </body>
    </html>
  );
}