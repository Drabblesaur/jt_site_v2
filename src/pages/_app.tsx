import Navbar from "components/navbar";
import Footer from "components/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Spline from "@splinetool/react-spline";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col h-screen justify-between ">
        <Navbar />
        <div className="h-full">
          <Component {...pageProps} />
        </div>
        <div className="absolute hidden md:inline w-full h-full -z-10">
          <Spline scene="https://prod.spline.design/Ge2RQYn36QFFnm3d/scene.splinecode" />
        </div>
        <Footer />
      </div>
    </>
  );
}
