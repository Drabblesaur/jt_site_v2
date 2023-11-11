import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-full lg:flex-row justify-center md:flex-row sm:flex-row">
      <Head>
        <title>Home</title>
        <meta name="Homepage" content="Johnny To's Dev Site" />
        <meta name="Author" content="Johnny To"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="grid place-content-top font-rubik-MonoOne text-cocoa-dark md:text-cream dark:text-cream dark:md:text-cream w-fit h-fit backdrop-blur-sm  p-6 rounded-[10px]
       bg-cream/10 dark:bg-cocoa-dark/50"
      >
        <section className=" mb-16 text-xl">
          <p>
            HI! I&apos;m Johnny! I&apos;m a UCR Computer Science<br></br>
            Student with a passion for Design and Code.
          </p>
        </section>
        <div className="mb-16 text-xl flex flex-col">
          <h2 className="mb-3">Featured Projects</h2>
          <div className="flex flex-col sm:flex-row  sm:space-x-4">
            <div className="max-w-[400px] max-h-[200px]">
            <Card
              name="UCR Map App"
              text="React Native map application designed for University of California, Riverside students."
              language="JavaScript"
              href="https://github.com/Drabblesaur/CS178AProject"
            />
            </div>
            <div className="max-w-[400px] max-h-[200px]">
            <Card
              name="Task Scheduler"
              text="Terminal-Based C++ Task Manager created for CS100."
              language="C++"
              href="https://github.com/Drabblesaur/CS100_Task_Scheduler"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
