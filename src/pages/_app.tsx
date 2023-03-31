import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Albert_Sans } from "next/font/google";

const albert = Albert_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${albert.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
