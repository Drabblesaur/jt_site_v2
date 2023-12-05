import Image from "next/image";
import Card from "components/card";
import ProjectHeader from "components/svg/projects_header";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="container mx-auto mb-10 p-6 rounded-[10px] md:text-cream dark:text-cream dark:md:text-cream w-fit h-fit backdrop-blur-sm  p-6 rounded-[10px]
    bg-cocoa-light/10 dark:bg-cocoa-dark/50">
      <div className="grid place-content-center ">
        <ProjectHeader />
      </div>
      <div className="grid place-content-center mt-2 px-4 mb-2">
        <section className="text-clip text-center">
          <p className="text-xl font-rubik-MonoOne text-cocoa-dark md:text-cream dark:text-cream">
            Finished Projects
          </p>
        </section>
        <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar snap-x snap-always"
      >
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
            <Card
              name="UCR Map App"
              text="React Native map application designed for University of California, Riverside students."
              language="JavaScript"
              href="https://github.com/Drabblesaur/CS178AProject"
            />
            </div>
          </div>
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Card
              name="Task Scheduler"
              text="Terminal-Based C++ Task Manager created for CS100."
              language="C++"
              href="https://github.com/Drabblesaur/CS100_Task_Scheduler"
            />
            </div>
          </div>
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Card
              name="ML Feature Selection Algo"
              text=" Forward/Backward Feature Selection with K Nearest Neighbor (CS170)"
              language="Python"
              href="https://github.com/GodfreyL3/cs170-project2/tree/main"
            />
            </div>
          </div>
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Card
              name="Personal Website"
              text="My Personal Website! Built With Tailwind CSS, Next.js, and Spline"
              language="TypeScript"
              href="https://github.com/Drabblesaur/jt_site_v2"
            />
            </div>
          </div>
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Card
              name="IMDB DataStore Interface"
              text="IMDB Movie Storage with CRUD Options and an Electron.js GUI"
              language="C++"
              href="https://github.com/CS180-spring/cs180-21-l"
            />
            </div>
          </div>
      </div>
</div>
<div className="grid place-content-center mt-2 px-4">
        <section className="text-clip text-center mb-2">
          <p className="text-xl font-rubik-MonoOne text-cocoa-dark md:text-cream dark:text-cream">
            Current Projects
          </p>
        </section>
        <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar snap-x snap-always"
      >
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Card
              name="Enigma Machine Encoder/Decoder"
              text="Python Implementation of the WWII Enigma Machine"
              language="Python"
              href="https://github.com/CS180-spring/cs180-21-l"
            />
            </div>
          </div>
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Card
              name="Desktop Personal Journal"
              text="Electron.js Journaling App"
              language="JavaScript"
              href="https://github.com/CS180-spring/cs180-21-l"
            />
            </div>
          </div>
          <div className="inline-block px-3 snap-start">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-[10px] shadow-md bg-cocoa-dark hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Card
              name="Workout Tracker App"
              text="A Workout Tracker for the gym"
              language="Swift"
              href="https://github.com/CS180-spring/cs180-21-l"
            />
            </div>
          </div>
      </div>
</div>
      </div>
  );
}
