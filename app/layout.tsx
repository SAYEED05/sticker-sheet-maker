import type { Metadata } from "next";
import "./globals.css";
import { ReactQueryProvider } from "@/app/configs/react-query/ReactQuerProvider";

export const metadata: Metadata = {
  title: "Sticker Layout Maker",
  description:
    "Create and customize your own stickers with our easy-to-use sticker layout maker. Perfect for personal and professional use.",
  keywords: [
    "sticker maker",
    "sticker layout",
    "custom stickers",
    "sticker design",
    "personalized stickers",
    "professional stickers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} style={{ display: "none" }}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
