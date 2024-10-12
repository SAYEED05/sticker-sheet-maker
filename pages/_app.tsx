import type { AppProps } from "next/app";
import "@/app/globals.css";
import Head from "next/head";
export const metadata = {
  title: "Sticker Layout Maker" as string,
  description:
    "Create and customize your own stickers with our easy-to-use sticker layout maker. Perfect for personal and professional use.",
  keywords: [
    "sticker maker",
    "sticker layout",
    "custom stickers",
    "sticker design",
    "personalized stickers",
    "professional stickers",
  ] as string[] | undefined,
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
        <meta name="keywords" content={metadata.keywords?.join(",")} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
