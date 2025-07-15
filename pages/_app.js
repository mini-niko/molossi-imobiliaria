import Header from "@/components/Header";
import "@/styles/globals.css";

export default function Root({ Component, pageProps }) {
  return (
    <div className="bg-background w-full min-h-dvh">
      <Header />
      <Component {...pageProps} />;
    </div>
  );
}
