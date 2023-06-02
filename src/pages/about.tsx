import Image from "next/image";
import AboutHeader from "components/svg/about_header";
import JTLogo from "components/svg/jt_logo";
export default function About() {
  return (
    <div className="container mx-auto  p-6 rounded-[10px] md:backdrop-blur-sm  md:bg-cocoa-dark/50">
      <div className="grid place-content-center ">
        <AboutHeader />
      </div>
      <div className="grid place-content-center mt-2 px-4 ">
        <section className="text-clip lg:w-[900px]">
          <p className="text-xl text-cocoa-dark md:text-cream dark:text-cream dark:md:text-cream ">
            &emsp;Growing up in San Jose, I grew up with a love for art and
            design and originally wanted to pursue a career in the arts. Due to
            financial reasons I couldn't persue further in my studies; instead
            pivoting to Computer Science. However, I found that I could still
            express my creativity and artistic side through programming. I
            started to learn web development and mobile development and found
            that I really enjoyed it. I&apos;m currently working on a few
            projects to further my skills. I aim for my projects to be
            functional, accessible, and aesthetically pleasing. I&apos;m
            currently looking for an internship for Fall 2023 in Software
            Engineering, Web/Mobile Development, or UI/UX Design.
            <br />
            <br />
            &emsp;I&apos;m also interested in Machine Learning and Data Science.
            I am currently learning more about these fields and hope to apply
            them to my projects in the future.
            <br />
            <br />
            &emsp;When I&apos;m not coding, I enjoy playing video games, tending
            to my plants, and going to the gym. I also enjoy learning about new
            tech, art and design! If you have any questions or just want to
            chat, feel free to reach out!
          </p>
        </section>
      </div>
    </div>
  );
}
