import "@/styles/globals.css";
import { Arapey } from "next/font/google";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const arapey = Arapey({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arapey",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [headerStep, setHeaderStep] = useState(0);
  return (
    <div className={`${montserrat.variable} ${arapey.variable} font-sans`}>
      <div className={"row navbar font-serif"}>
        <Link
          id="home-btn"
          className={"navbtn " + (pathname == "/" ? "" : "no-underline")}
          // onclick="navBtnClicked(event)"
          href="/"
        >
          Home
        </Link>
        <Link
          id="games-btn"
          className={
            "navbtn " + (pathname == "/projects" ? "" : "no-underline")
          }
          // onclick="navBtnClicked(event)"
          href="/projects"
        >
          Projects
        </Link>
      </div>

      <div id="imani-header" className={arapey.className}>
        <div className="colorpad"></div>
        <div id="ima-container">
          <div id="ima-im">im</div>
          <div id="ima-a" className={`step${headerStep}`}>
            a
          </div>
          <div id="ima-things" className={`step${headerStep}`}>
            <div>
              <span>ni</span>
            </div>
            <div>
              <span>developer</span>
            </div>
            <div>
              <span>filmmaker</span>
            </div>
            <div>
              <span>here&nbsp;for&nbsp;you!</span>
            </div>
          </div>
        </div>
        <div className="colorpad"></div>
      </div>
      <Component {...pageProps} setHeaderStep={setHeaderStep} />
      <div className="text-center text-xs text-gray-400 bg-gray-800 absolute h-4 inset-0 top-auto">
        © 2024 Imani Muya
      </div>
    </div>
  );
}
