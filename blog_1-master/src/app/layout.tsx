"use client"; // 클라이언트 컴포넌트로 지정

import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { Intro } from "./_components/intro";
import { usePathname } from "next/navigation"; // usePathname 훅 import
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // 현재 경로 가져오기

  return (
    <html lang="en">
      <head>
        {/* 메타 태그 및 아이콘 설정 */}
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        {/* 현재 경로가 '/'가 아닐 때만 Intro 렌더링 */}
        {pathname !== '/' && <Intro />}
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
