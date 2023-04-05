import Image from "next/image";
import AboutHeader from "components/svg/about_header";
import JTLogo from "components/svg/jt_logo";
export default function About() {
  return (
    <div className="container mx-auto">
      <div className="grid place-content-center ">
        <AboutHeader />
      </div>
      <div className="grid place-content-center mt-2 px-4">
        <section className="text-clip lg:w-[900px]">
          <p className="text-xl text-cream">
            HI! I&apos;m Johnny! I&apos;m a student at the University of
            California,Riverside studying Computer Science with a passion for
            Design and Code. I&apos;m currently looking for an internship for
            Front-End Development. I hope to gain experience in the field and
            pivot twords Full-Stack Developement.
            <br />
            I'm also interested in Machine Learning and Data Science.
          </p>
        </section>
      </div>
    </div>
  );
}
