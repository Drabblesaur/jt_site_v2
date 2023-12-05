import Image from "next/image";
import Link from "next/link"
import AboutHeader from "components/svg/about_header";
import JTLogo from "components/svg/jt_logo";
export default function About() {
  return (
    <div className="container mx-auto mb-10 p-6 rounded-[10px] md:text-cream dark:text-cream dark:md:text-cream w-fit h-fit backdrop-blur-sm  p-6 rounded-[10px]
    bg-cocoa-light/10 dark:bg-cocoa-dark/50">
      <div className="grid place-content-center ">
        <AboutHeader />
      </div>
      <div className="flex flex-col justify-items-center items-center">
      <Image 
        src='/../public/Profile.png'
        width={200}
        height={200}
        alt="Picture of Johnny To"
        priority
        />
      </div>
      <div className="grid place-content-center mt-2 px-4 ">
        <section className="text-clip lg:w-[900px]">
          <p className="text-xl text-cocoa-dark md:text-cream dark:text-cream dark:md:text-cream ">
          &emsp;Hi! My name is Johnny and I am a recent graduate from the University of California, Riverside. I have experience working with web and machine learning technologies and I&apos;m constantly learning new frameworks and libraries to improve my skills. <br/><br/>

          &emsp;I enjoy all parts of the development process, from designing the user experience and interfaces to implementing the backend services. I&apos;m also branching towards Data Science and Mobile/Desktop Development to further my skills.<br/><br/>

          &emsp;Outside of work, I like to go to the gym and play video games. I also like taking <Link href="/photos" className="underline">photos</Link> and taking care of all my indoor plants!<br/><br/>

          &emsp; As a new grad, I am excited to bring my education, technical skills, and creative problem-solving abilities to a fast-paced startup or growing company. I strive to continually learn and adapt to new technologies as the industry rapidly changes. I aim to build impactful products that utilize technology to improve people&apos;s lives. I&apos;m always looking for new challenges and opportunities to grow my skill set and make a difference.
          </p>
        </section>
      </div>
    </div>
  );
}
