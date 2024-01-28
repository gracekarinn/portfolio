import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMailSendFill } from "react-icons/ri";
import { SiSpotify } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Intro = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-5 mx-auto my-5'>
          <Image
            src="https://media.licdn.com/dms/image/D4D03AQEjTgQkF_SDSw/profile-displayphoto-shrink_800_800/0/1704387302028?e=1709769600&v=beta&t=uXG_1S36QAWljBeANdfqha3y9pD49Oiewa95f_H5S14"
            alt="Graces photo"
            width="200"
            height="200"
            quality="95"
            className="h-45 w-45 lg:size-fit rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
        <div className='col-span-7 place-self-center md:translate-x-5'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Henlo, I&apos;m Grace</h1>
            <p className='text-[#ADB7BE] text-lg lg:text-xl text-justify'>
              Coffee lover, rubik&apos;s cube enthusiast, and coding explorer. 
              Welcome, Fellow Coders! Let&apos;s connect and collaborate ^__^
            </p>
            <div className='flex flex-row space-x-2 -translate-x-2 font-medium'>
              <Link 
              href="mailto:gracekarina12@gmail.com?subject=Hi%2C%20Grace!!!"
              target="_blank"
              className="bg-black flex flex-row text-white px-5 py-3 items-center gap-4 my-5 rounded-full outline-none">
                Contact Me! <RiMailSendFill />
                </Link>
              <Link
              href='https://open.spotify.com/user/hum8h8pawch3picc2tdzqxuar?si=eefed3a5bdc9495c'
              target='_blank'
              className='flex flex-row rounded-full items-center my-5 outline-none'>
                <SiSpotify size={40} color='white' />
              </Link>
              <Link
              href='https://www.linkedin.com/in/grace-karina-5a2688259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
              target='_blank'
              className='flex flex-row rounded-full items-center my-5 outline-none'>
                <FaLinkedin size={40} color='white' />
              </Link>
              <Link
              href='https://www.instagram.com/gracekarinn'
              target='_blank'
              className='flex flex-row rounded-full items-center my-5 outline-none'>
                <FaInstagram size={40} color='white' />
              </Link>
            </div>
            <div className='flex-row space-x-2 -translate-x-2 -translate-y-7 font-medium'>
              <div >
                <Link
                href='#About'
                className='bg-[#94a3b8] flex flex-row justify-center text-white px-5 py-3 items-center gap-4 my-5 rounded-full outline-none'>
                  More about me <FaAngleDown />
                </Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;