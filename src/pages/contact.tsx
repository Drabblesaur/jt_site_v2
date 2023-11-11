import Image from "next/image";
import ContactHeader from "components/svg/contact_header";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin, BsInstagram} from "react-icons/bs";
import {MdOutlineMail} from "react-icons/md"
export default function Contact() {
  return (
    <div className="container mx-auto  p-6 rounded-[10px] md:text-cream dark:text-cream dark:md:text-cream w-fit h-fit backdrop-blur-sm  p-6 rounded-[10px]
    bg-cream/10 dark:bg-cocoa-dark/50">
      <div className="grid place-content-center ">
        <ContactHeader />
      </div>
      <div className="grid place-content-center mt-2 px-4">
        <section className="text-clip lg:w-[900px] text-center">
          <p className="text-xl text-cocoa-dark dark:text-cream">
            Here's all the ways you can contact me!
          </p>
        </section>
        <div className="w-full grid place-content-center p-2">
                          {/*Social Media Buttons*/}
                          <div className="flex space-x-2 flex-row justify-items-end">
          <div className="w-[100px] h-[100px] bg-black grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light">
            <a href="https://github.com/Drabblesaur" target="blank">
              {" "}
              <FiGithub size={40} color="white" />{" "}
            </a>
          </div>
          <div className="w-[100px] h-[100px] bg-[#0077B5] grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light">
            <a href="https://www.linkedin.com/in/johnnyto015/" target="blank">
              {" "}
              <BsLinkedin size={40} color="white" />{" "}
            </a>
          </div>
          <div className="w-[100px] h-[100px] bg-[#d62976] grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light">
            <a href="https://www.instagram.com/jto.su/" target="blank">
              {" "}
              <BsInstagram size={40} color="white" />{" "}
            </a>
          </div>
          <div className="w-[100px] h-[100px] bg-[#479F76] grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light">
            <a href="mailto:jto015@ucr.edu" target="blank">
              {" "}
              <MdOutlineMail size={40} color="white" />{" "}
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
