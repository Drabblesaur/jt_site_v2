import Image from "next/image";
import ContactHeader from "components/svg/contact_header";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
export default function Photos() {
  return (
    <div className="container mx-auto  p-6 rounded-[10px] md:text-cream dark:text-cream dark:md:text-cream w-fit h-fit backdrop-blur-sm  p-6 rounded-[10px]
    bg-cream/10 dark:bg-cocoa-dark/50">
      <div className="grid place-content-center ">
        <ContactHeader />
      </div>
      <div className="grid place-content-center mt-2 px-4">
        <section className="text-clip lg:w-[900px] text-center">
          <p className="text-xl text-cocoa-dark dark:text-cream">
            Welcome to my "hidden" photo page!
          </p>
        </section>
        <div
        className="bg-red-400 h-20 rounded-[10px] flex flex-row"
        >
            <div
            className="bg-blue-400 p-4  flex justify-items-center items-center ">
                Email 1
            </div>
        </div>
        <div
        className="bg-red-400 h-20 rounded-[10px] flex flex-row"
        >
            <div
            className="bg-blue-400 p-4  flex justify-items-center items-center ">
                Email 2
            </div>
        </div>
                          {/*Social Media Buttons*/}
                          <div className="flex space-x-2 flex-row justify-items-end">
          <div className="w-[50px] h-[50px] bg-black grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light">
            <a href="https://github.com/Drabblesaur" target="blank">
              {" "}
              <FiGithub size={32} color="white" />{" "}
            </a>
          </div>
          <div className="w-[50px] h-[50px] bg-[#0077B5] grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light">
            <a href="https://www.linkedin.com/in/johnnyto015/" target="blank">
              {" "}
              <BsLinkedin size={32} color="white" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
