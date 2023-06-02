import { FiGithub } from "react-icons/fi";

interface Cardprops {
  name: string;
  language: string;
  langaugeColor: string;
  text: string;
  href: string;
}

const Card = (props: Cardprops) => {
  return (
    <div className="bg-white dark:bg-cocoa-dark  p-6 rounded-[10px] w-max-[300px] w-full flex flex-col justify-between  text-black dark:text-cream mb-4 border-4 dark:border-cocoa-light ">
      <div className="mb-2">
        <h1 className="font-rubik-MonoOne mb-1">{props.name}</h1>
        <div
          className="flex justify-center rounded-full w-32 mb-1"
          style={{ backgroundColor: props.langaugeColor }}
        >
          <p className="font-rubik text-white text-sm ">{props.language}</p>
        </div>
        <p className="font-rubik text-sm">{props.text}</p>
      </div>
      <div className="w-[50px] h-[50px] bg-black grid place-content-center rounded-md ease-in-out duration-200 border-transparent border-2 hover:border-cocoa-light">
        <a href={props.href} target="blank">
          <FiGithub size={32} color="white" />
        </a>
      </div>
    </div>
  );
};

export default Card;
