import React from "react";
import Link from "next/link";
import {FiGithub} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return(
        <div className='hidden sm:flex justify-between align-bottom bg-cocoa-light w-full font-rubik-MonoOne text-cream p-4'>
          <ul>
            <li className="ml-6 ">
              <a className=" text-lg">Navigation</a>
            </li>
            <li className="ml-6 hover:text-brand-orange">
            <Link href="/about">About</Link>
            </li>
            <li className="ml-6 hover:text-brand-orange">
            <Link href="/projects">Projects</Link>
            </li>
            <li className="ml-6 hover:text-brand-orange">
            <Link href="/resume">Resume</Link>
            </li>
            <li className="ml-6 hover:text-brand-orange">
            <Link href="/contact">Contact</Link>
            </li>
          </ul>
        <div>
          <h1>jto015@ucr.edu</h1>
          {/*Social Media Buttons*/}
          <div className='flex space-x-2 flex-row justify-items-end'>
            <div className='w-[50px] h-[50px] bg-black grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light'>
              <a href='https://github.com/Drabblesaur'> <FiGithub size={32} color='white'/> </a>
            </div>
            <div className='w-[50px] h-[50px] bg-[#0077B5] grid place-content-center rounded-md dark:border-2 dark:border-cocoa-light'>
              <a href='https://github.com/Drabblesaur'> <BsLinkedin size={32} color='white'/> </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;