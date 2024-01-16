import Image from "next/image";
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";

const projectList = [
  {
    id: 1,
    imgSrc: "/backstudio.png",
    href: "https://back-studio-stomp-git-dev-edricy.vercel.app/",
    title: "Back Studio Stomp",
    description: (
      <>
        <p>
          Social Dancing is alive and well in the Triangle! This website was
          made to draw more newcomers to dance at local events in the
          Raleigh/Durham area. This website is built with NextJS, TailwindCSS,
          and Sanity CMS.
        </p>
        <p>
          <a
            href="https://back-studio-stomp-git-dev-edricy.vercel.app/"
            target="_blank"
          >
            Visit the site!
          </a>
        </p>
      </>
    ),
    tags: ["web"],
  },
  {
    id: 2,
    imgSrc: "/dogwood.png",
    href: "https://www.dogwoodphotoco.com/",
    title: "Dogwood Photo Company",
    description: (
      <>
        <p>
          Lacy is a talented photographer located in the Raleigh/Durham area. I
          built her a website to transition her off of a monthly subscription
          service. Her website is built with NextJS, TailwindCSS, and Sanity
          CMS.
        </p>
        <p>
          <a href="https://www.dogwoodphotoco.com/" target="_blank">
            Check out dogwoodphotoco.com
          </a>
        </p>
      </>
    ),
    tags: ["web"],
  },
  {
    id: 3,
    imgSrc: "/penelope.png",
    href: "https://cse.taylor.edu/~eyu/GameJam/GameJam-F2019/",
    title: "Penelope Penelope",
    description: (
      <>
        <p>
          Taylor University GameJam Fall 2019. You and a friend must navigate
          parallel worlds. There are portals that allow you to see into the
          other world and switch places. We got to learn to use WebSockets while
          collaborating with talented artists and musicians!
        </p>
        <p>
          <a
            href="https://cse.taylor.edu/~eyu/GameJam/GameJam-F2019/"
            target="_blank"
          >
            Play Penelope here!
          </a>
        </p>
      </>
    ),
    tags: ["game"],
  },
  {
    id: 4,
    imgSrc: "/davidjoe.png",
    href: "https://www.davidkjoe.com",
    title: "David Joe",
    description: (
      <>
        <p>
          David Joe, is an experienced musician who wanted to start offering
          private music lessons. His website is built with NextJS, TailwindCSS,
          and deployed with Vercel.
        </p>
        <p>
          <a href="https://www.davidkjoe.com/" target="_blank">
            Visit David's website at davidkjoe.com
          </a>
        </p>
      </>
    ),
    tags: ["web"],
  },
  {
    id: 5,
    imgSrc: "/enspire.png",
    href: "https://www.enspirekorea.com",
    title: "Enspire Korea",
    description: (
      <>
        <p>
          Enspire Korea is an non-profit English immersion lab based in Seoul,
          Korea. I volunteered to redesign and build their website to reduce
          their operating expenses. This website was built with NextJS and
          Korean translations in mind.
        </p>
        <p>
          <a href="https://www.enspirekorea.com" target="_blank">
            Visit the website at enspirekorea.com
          </a>
        </p>
      </>
    ),
    tags: ["web"],
  },
  {
    id: 6,
    imgSrc: "/yellow-wood.png",
    href: "https://github.com/ImaniMuya/the-yellow-wood",
    title: "The Yellow Wood",
    description: (
      <>
        <p>
          For TU's Spring 2020 Game Jam, my team made a tower defense game. The
          theme for the game jam was Diverge/Diversion, and we decided to go the
          route of Robert Frost's the Road Not Taken.
        </p>
        <p>
          <a href="https://github.com/ImaniMuya/the-yellow-wood" target="_blank">
            Visit the Yellow Wood repo!
          </a>
        </p>
      </>
    ),
    tags: ["game"],
  },

  {
    id: 7,
    imgSrc: "/clydetitle.png",
    href: "/clyde2.0.html",
    title: "Clyde",
    description: (
      <>
        <p class="text-margin">
          At TU's Spring 2018 GameJam, we made a PICO-8 game! Clyde the snake
          resides in a forgotten arcade game from decades past. Help Clyde
          relive his glory days as the favorite game of the arcade! Control him
          using the arrow keys.
        </p>
        <p class="text-margin">
          <a href="/clyde2.0.html" target="_blank">
            Play Clyde here!
          </a>
        </p>
      </>
    ),
    tags: ["game"],
  },

  {
    id: 8,
    imgSrc: "/LandLtitle.png",
    href: "/leroy_and_lazzlo.html",
    title: "Leroy and Lazlo",
    description: (
      <>
        <p>
          For TU GameJam Fall 2018 I made a PICO-8 game. Two friends were flying
          along when... Oh No! Leroy wakes up and his wings are gone! Help the
          two find Leroy's wings and get the friends back in the sky!
        </p>
        <p>
          <a href="/leroy_and_lazzlo.html" target="_blank">
            Play Leroy and Lazlo here!
          </a>
        </p>
      </>
    ),
    tags: ["game"],
  },

  {
    id: 9,
    imgSrc: "/bunny-burrow.png",
    href: "https://github.com/bromlu/Pyzzle",
    title: "Bunny Barrow",
    description: (
      <>
        <p>
          Spring of 2019 my team made a puzzle game engine. It ran off of the
          C++ SFML library but allows game code to be written in Python.
        </p>
        <p>
          <a href="https://github.com/bromlu/Pyzzle" target="_blank">
            Click here to see the Pyzzle repo!
          </a>
        </p>
      </>
    ),
    tags: ["game"],
  },
];

export default function Projects({ setHeaderStep }) {
  useEffect(() => {
    setHeaderStep(1);
  }, []);
  const [filter, setFilter] = useState("");
  const changeFilter = (tag) => {
    console.log(document.startViewTransition);
    if (!document.startViewTransition) {
      setFilter(tag);
    }

    document.startViewTransition(() =>
      flushSync(() => {
        setFilter(tag);
      })
    );
  };

  const displayedProjects = !filter
    ? projectList
    : projectList.filter((project) => project.tags.includes(filter));
  const halfLength = displayedProjects.length / 2;
  return (
    <>
      <div id="games-content" class="page-outer fill m0">
        <div className="row gap-4 p-4 m-auto justify-center text-lg">
          <button
            onClick={() => changeFilter("")}
            className={`${filter == "" ? "underline" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => changeFilter("web")}
            className={`${filter == "web" ? "underline" : ""}`}
          >
            Websites
          </button>
          <button
            onClick={() => changeFilter("game")}
            className={`${filter == "game" ? "underline" : ""}`}
          >
            Games
          </button>
        </div>

        <div id="games-listing">
          <div className="flex flex-col">
            {displayedProjects.map(
              (project, i) => i % 2 == 0 && <ProjectCard project={project} />
            )}
          </div>
          <div className="flex flex-col">
            {displayedProjects.map(
              (project, i) => i % 2 == 1 && <ProjectCard project={project} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group p-4">
      <div
        key={project.id}
        class={
          "game-card max-w-96 group-hover:-translate-y-3 focus-within:-translate-y-3 transition"
        }
        style={{ viewTransitionName: `project-${project.id}` }}
      >
        <a target="_blank" href={project.href}>
          <Image
            width={300}
            height={300}
            alt=""
            class="game"
            src={project.imgSrc}
          />
        </a>
        <h2 className="font-semibold text-lg">{project.title}</h2>
        {project.description}
      </div>
    </div>
  );
}
