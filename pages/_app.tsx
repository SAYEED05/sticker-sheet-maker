import type { AppProps } from "next/app";
import "@/app/globals.css";
import Head from "next/head";
import { Abel } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: `${abel.style.fontFamily}, sans-serif`,
  },
});

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
  ] as string[],
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(",")} />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
