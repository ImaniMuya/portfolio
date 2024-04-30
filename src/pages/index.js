import useOnScreen, { useMostOnScreen } from "@/util/useMostOnScreen";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Home({ setHeaderStep }) {
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const mostShownEl = useMostOnScreen(refs);

  useEffect(() => {
    const idx = Number(mostShownEl?.getAttribute("data-idx") ?? 0);
    setHeaderStep(idx);
  }, [mostShownEl]);
  return (
    <div className="column">
      <div
        className="column bg-blue text-white items-center px-4 py-12 mb-64 relative"
        style={{ paddingBottom: "min(60%, 20rem)" }}
      >
        <div
          ref={refs[0]}
          data-idx={0}
          className="absolute top-1/2 h-24 inset-x-0 pointer-events-none"
        ></div>
        <div className="column max-w-xl">
          <h1 className="bigger-text font-serif">hi! i'm imani</h1>
          <div className="lh-24">
            i am a front-end web developer who loves bringing people together
            with the power of the internet.
          </div>
          <div className="row pt">
            <a
              href="https://www.linkedin.com/in/imani-muya-6320b8169/"
              target="_blank"
            >
              <img className="icon" src="/linkedin-black.png" />
            </a>
            <a href="https://github.com/ImaniMuya" target="_blank">
              <img className="icon" src="/github.png" />
            </a>
          </div>
        </div>
        <div className="mt-24 h-0 w-full max-w-[500px] relative">
          <Image
            src="/imani-face.jpg"
            width={500}
            height={500}
            priority
            alt="imani"
            className="rounded-full shrink-0 absolute shadow-lg"
          />
        </div>
      </div>
      <div className="w-full px-8 mx-auto row flex-wrap justify-center gap-8 relative">
        <div
          ref={refs[1]}
          data-idx={1}
          className="absolute top-1/4 h-24 inset-x-0 pointer-events-none"
        ></div>

        <div className="grid grid-cols-2 auto-cols-fr auto-rows-fr items-stretch w-96 h-96">
          <Link
            href={"https://www.enspirekorea.com"}
            className="hover:scale-105 transition shadow-lg"
          >
            <Image
              src="/enspire.png"
              width={640}
              height={489}
              alt="Enspire Korea website"
              className="object-cover h-full"
            />
          </Link>
          <Link
            href={"https://www.dogwoodphotoco.com/"}
            className="hover:scale-105 transition shadow-lg"
          >
            <Image
              src="/dogwood.png"
              width={640}
              height={332}
              alt="dogwood photography website"
              className="object-cover h-full"
            />
          </Link>
          <Link
            href={"https://www.trianglelindyhop.com/"}
            className="hover:scale-105 transition shadow-lg h-full"
          >
            <Image
              src="/tlh.png"
              width={640}
              height={480}
              alt="triangle lindy hop website"
              className="object-cover h-full"
            />
          </Link>
          <Link
            href={"https://www.davidkjoe.com"}
            className="hover:scale-105 transition shadow-lg h-full"
          >
            <Image
              src="/davidjoe.png"
              width={640}
              height={471}
              quality={100}
              alt="david joe website"
              className="object-cover h-full"
            />
          </Link>
        </div>
        <div className="p-8">
          <h2 className="bigger-text font-serif">Frontend Development</h2>
          <p className="lh-24 max-w-lg">
            I have been building websites for over 6 years, and I love adding
            new technologies to my toolbelt!
          </p>
          <Link href="/projects" className="home-link block w-max ml-auto mt-4">
            See more of my work
          </Link>
          <div className="w-96 border rounded-2xl ml-auto mt-12 translate-y-24 bg-white mr-8 relative z-[2]">
            <div className="font-medium text-center py-2 bg-lightblue rounded-t-2xl">
              Frontend Skills
            </div>
            <hr />
            <div className="font-medium px-2 pt-4 pb-1">
              My Favorite Languages
            </div>
            <div className="px-2 pb-4">
              JS • CSS • HTML • React • Vue • SCSS
              <br />
              TypeScript • PHP • Java • Python • TailwindCSS
            </div>
            <hr />
            <div className="font-medium px-2 pt-4 pb-1">
              My Favorite Tools and Tech
            </div>
            <div className="px-2 pb-4">
              Git • NextJS • Vercel • Netlify • AEM
              <br />
              SanityCMS • WordPress • Figma • Adobe XD Confluence • Jira •
              BitBucket
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightblue pt-36 relative">
        <div
          ref={refs[2]}
          data-idx={2}
          className="absolute top-1/4 h-24 inset-x-0 pointer-events-none"
        ></div>

        <div className="w-full px-8 mx-auto row flex-wrap-reverse justify-center items-center">
          <div className="p-8">
            <h2 className="bigger-text font-serif">Film and Media</h2>
            <p className="lh-24 max-w-lg">
              I enjoy using storytelling as a tool that to remove barriers
              between people of different backgrounds.
            </p>
            <a
              href="https://vimeo.com/444113836"
              className="home-link block w-max ml-auto mt-4"
              target="_blank"
            >
              Check out my demo reel
            </a>
            <div className="w-96 border rounded-2xl mt-20 bg-lightblue translate-y-24 relative z-[2]">
              <div className="font-medium text-center py-2 text-white bg-blue rounded-t-2xl">
                Film and Media Skills
              </div>
              <hr />
              <div className="font-medium px-2 pt-4 pb-1">My Roles</div>
              <div className="px-2 pb-4">
                Director • Producer • Editor • Screen Writer
              </div>
              <hr />
              <div className="font-medium px-2 pt-4 pb-1">
                My Favorite Tools
              </div>
              <div className="px-2 pb-4">
                After Effects • Premier Pro • Illustrator • InDesign Illustrator
                • Photoshop • Pro Tools • DaVinci Resolve
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 auto-cols-fr auto-rows-fr items-stretch w-96 h-96">
            <Link
              href={"https://vimeo.com/378563895"}
              className="hover:scale-105 transition shadow-lg h-full"
            >
              <Image
                src="/nurk.png"
                width={640}
                height={471}
                quality={100}
                alt="Nurk Professional Drone Racer"
                className="object-cover h-full"
              />
            </Link>
            <Link
              href={"https://vimeo.com/348942356"}
              className="hover:scale-105 transition shadow-lg h-full"
            >
              <Image
                src="/cube.png"
                width={640}
                height={480}
                alt="Bamboozled"
                className="object-cover h-full"
              />
            </Link>
            <Link
              href={"https://vimeo.com/347146722"}
              className="hover:scale-105 transition shadow-lg"
            >
              <Image
                src="/multicam-still.png"
                width={640}
                height={332}
                alt="shut up and listen"
                className="object-cover h-full"
              />
            </Link>
            <Link
              href={"https://vimeo.com/347146530"}
              className="hover:scale-105 transition shadow-lg"
            >
              <Image
                src="/UFNo.png"
                width={640}
                height={489}
                alt="U.F.No"
                className="object-cover h-full"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue py-48 text-white relative">
        <div
          ref={refs[3]}
          data-idx={3}
          className="absolute top-1/4 h-24 inset-x-0 pointer-events-none"
        ></div>

        <h2 className="bigger-text font-serif text-center">
          Interested in Working Together?
        </h2>
        <div className="flex text-center justify-center items-center">
          <p>Find me here</p>
          <a
            href="https://www.linkedin.com/in/imani-muya-6320b8169/"
            target="_blank"
          >
            <img className="icon" src="/linkedin-black.png" />
          </a>
          <a href="https://www.instagram.com/mawnimoo/" target="_blank">
            <img className="icon" src="/instagram-icon.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
