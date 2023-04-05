import Image from "next/image";
import ProjectHeader from "components/svg/projects_header";
export default function Projects() {
  return (
    <div className="flex flex-col justify-center">
      <div className="grid place-content-center ">
        <ProjectHeader />
      </div>
      <div className="grid place-content-center mt-2 px-4">
        <section className="text-clip lg:w-[900px] text-center">
          <p className="text-xl text-cocoa-dark dark:text-cream">
            Here are some of my current projects!
          </p>
        </section>
      </div>
    </div>
  );
}
