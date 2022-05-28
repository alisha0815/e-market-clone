import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-xl mx-auto">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
