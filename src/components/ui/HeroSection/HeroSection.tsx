import React, { useEffect, useRef, useState } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiJenkins,
  SiVuedotjs,
  SiInstagram,
  SiGithub,
  SiLinkedin,
  SiTiktok
} from 'react-icons/si';
import { MdOutlineMail, MdWhatsapp } from "react-icons/md";
import Container from "@/components/ui/Container/Container";
import ComputerCanvas from "@/component/Desktop/Desktop";
import DotGrid from '../DotGrid/DotGrid';
import TrueFocus from '../TrueFocus/TrueFocus';
import Footer from '@/component/Footer/Footer';
import { Timeline } from '../timeline';
import LogoLoop from '../../LogoLoop'
import Image from "next/image";
import Carousel from '../carousel';
import Lanyard from '../../Lanyard'
import { Input } from '../input';

import { Br, Cut, Line, Printer, Row, render, Text } from 'react-thermal-printer';

const data = [
  {
    title: "2022",
    content: (
      <div>
        <p className="text-lg text-white font-bold">
          Fazztech - Front End Developer
        </p>
        <p className="mb-8 text-lg text-white">
          Delivered assignment features for the Digi Expert web platform
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/digiexpert1.png"
            alt="startup template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg bg-red  md:h-44 lg:h-44"
          />
          <Image
            src="/images/digiexpert2.png"
            alt="startup template"
            width={500}
            height={500}

            className="h-20 w-full rounded-lg bg-red  md:h-44 lg:h-44"
          />
          <Image
            src="/images/digiexpert3.png"
            alt="startup template"
            width={500}
            height={500}

            className="h-20 w-full rounded-lg bg-red  md:h-44 lg:h-44"
          />
          <Image
            src="/images/digiexpert4.png"
            alt="startup template"
            width={500}
            height={500}

            className="h-20 w-full rounded-lg bg-red  md:h-44 lg:h-44"
          />
          <Image
            src="/images/digiexpert5.png"
            alt="startup template"
            width={500}
            height={500}

            className="h-20 w-full rounded-lg bg-red  md:h-44 lg:h-44"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-lg text-white font-bold">
          Indosat - Front End Developer
        </p>
        <p className="mb-8 text-lg text-white">
          Built & integrated a loan simulation system inside webview.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-lg ">
            <Image
              src="/images/indosat1.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full object-contain rounded-lg bg-red  md:h-44 lg:h-96"
            />
          </div>
          <div className="p-5 bg-white rounded-lg ">
            <Image
              src="/images/indosat2.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full object-contain rounded-lg bg-red  md:h-44 lg:h-96"
            />
          </div>
          <div className="p-5 bg-white rounded-lg ">
            <Image
              src="/images/indosat3.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full object-contain rounded-lg bg-red  md:h-44 lg:h-96"
            />
          </div>
          <div className="p-5 bg-white rounded-lg ">
            <Image
              src="/images/indosat4.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full object-contain rounded-lg bg-red  md:h-44 lg:h-96"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Now",
    content: (
      <div>
        <p className="text-lg mb-8 text-white font-bold">
          SMBCI - Digital Banking Solution Developer
        </p>
        <p className="text-lg text-white">
          Shipped OCR integration & revamped QRIS for Jenius Mobile.
        </p>
        <p className="text-lg text-white">
          Designed & delivered projects from zero → MVP (Jenius Daya).
        </p>
        <p className="text-lg text-white">
          Acted as PIC for QRIS feature development.
        </p>
        <p className="text-lg text-white">
          Integrated SonarQube to improve code quality.
        </p>
        <p className="text-lg text-white">
          Revamped Award module for Jenius Mobile.
        </p>
        <p className="text-lg text-white">
          Upgraded registration flow with new validation logic.
        </p>
      </div>
    ),
  },
];

const techLogos = [
  { node: <SiReact color='white' />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color='white' />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiVuedotjs color='white' />, title: "Tailwind CSS", href: "https://vuejs.org" },
  { node: <SiTypescript color='white' />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiNodedotjs color='white' />, title: "Tailwind CSS", href: "https://nodejs.org/id" },
  { node: <SiExpress color='white' />, title: "Tailwind CSS", href: "https://expressjs.com" },
  { node: <SiMysql color='white' />, title: "Tailwind CSS", href: "https://www.mysql.com" },
  { node: <SiJenkins color='white' />, title: "Tailwind CSS", href: "https://www.jenkins.io" },
  { node: <SiTailwindcss color='white' />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


const slideData = [
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/images/fazztrack.png",
  },
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "/images/dicoding3.png",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "/images/dicoding3.png",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "/images/dicoding3.png",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/images/dicoding3.png",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/images/digitalent1.png",
  },
];

function HeroSection() {

  return (
    <main className='flex flex-col items-center -mt-20 '>
      <Footer />
      <div className='lg:max-w-[1440px] h-screen flex justify-center'>
        <div className='w-[calc(100%)] h-screen  absolute -z-10 bg-black'>
          <DotGrid
            dotSize={30}
            gap={50}
            baseColor="#0B1E23"
            activeColor="#000000"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="w-full h-full flex flex-col gap-20 lg:flex-row justify-center text-white font-mono">
          <div className='w-full lg:h-full flex justify-center'>
            <div className='h-full flex flex-col justify-center'>
              <h1 className="text-5xl font-extrabold mb-4">Hi, I’m</h1>
              <h1 className="text-5xl font-extrabold mb-4">Tri Sumanzaya</h1>
              <div className='flex items-center'>
                <TrueFocus
                  sentence="Mobile Software"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#1A535C"
                  animationDuration={3}
                  pauseBetweenAnimations={1}
                />
                <div className='flex justify-center items-center ml-5'>
                  <p className="text-2xl font-extrabold">Engineer.</p>
                </div>
              </div>
              <p className="font-extrabold text-lg-500 mt-4">Practical code, Real impact.</p>
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className='w-[400px] h-[250px] lg:w-[550px] lg:h-[400px] bg-white'
              style={{ borderRadius: '19% 81% 17% 83% / 77% 15% 85% 23%' }}
            >
              <ComputerCanvas />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center flex-col bg-[#1A535C] bg-[url("/images/bgtimeline.png")] pb-20'>

        <Timeline data={data} />
      </div>
      <div className='w-full bg-black font-mono pb-20'>
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-20">
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold">
            Toolkit
          </h2>
          <p className="text-white text-sm md:text-base max-w-md">
            Core tools that drive my development journey.
          </p>
        </div>
        <div className='lg:max-w-[1440px] px-10'>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={100}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
        <div className="relative overflow-hidden w-full h-full pb-20">
          <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-20">
            <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold">
              Certificate
            </h2>
            <p className="text-white text-sm md:text-base max-w-md">
              Badges unlocked along the journey
            </p>
          </div>
          <Carousel slides={slideData} />
        </div>
      </div>

      <div className='w-full lg:max-w-[1440px] h-screen flex justify-between  bg-white relative font-mono'>
        <div className='z-10'>
          <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-20">
            <h2 className="text-lg md:text-4xl mb-4 text-black max-w-4xl font-bold">
              Contact
            </h2>
            <p className="text-black text-sm md:text-base max-w-md">
              Ready to start your next project? Our team is here to help you succeed. Reach out and let&apos;s discuss how we can bring your ideas to life.
            </p>
            <div className='w-full flex gap-5'>
              <button className='w-64 flex flex-col mt-10 relative border-2 p-5 rounded-xl text-sm shadow-lg text-left' onClick={()=>{
                alert('asdadads')
              }}>
                <div className='flex mt-2 mb-2'>
                <MdOutlineMail className='p-0 text-lg mr-2' />
                <p className='p-0 font-bold'>Email</p>
                </div>
                <p className='p-0'>Contact me on trisumanzaya93@gmail.com</p>
              </button>
              <div className='w-64 flex flex-col mt-10 relative border-2 p-5 rounded-xl text-sm shadow-lg'>
                <div className='flex mt-2 mb-2'>
                <MdOutlineMail className='p-0 text-lg mr-2' />
                <p className='p-0 font-bold'>Whatsapp</p>
                </div>
                <p className='p-0'>Contact me on +6281248886455</p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pb-20 px-4 md:px-8 lg:px-20">
            <h2 className="text-lg md:text-4xl mb-4 text-black max-w-4xl font-bold">
              Social Media
            </h2>
            <p className="text-black text-sm md:text-base max-w-md">
              Please follow me on social media
            </p>
            <div className='w-full flex gap-5'>
              <div className=' flex flex-col mt-10 relative border-2 p-5 rounded-xl text-sm shadow-lg'>
                <div className='flex mt-2'>
                <SiInstagram className='p-0 m-0 text-lg mr-2' />
                <p className='p-0'>Instagram</p>
                </div>
              </div>
              <div className='flex flex-col mt-10 relative border-2 p-5 rounded-xl text-sm shadow-lg'>
                <div className='flex mt-2'>
                <SiTiktok className='p-0 text-lg mr-2' />
                <p className='p-0'>Tiktok</p>
                </div>
              </div>
              <div className='flex flex-col mt-10 relative border-2 p-5 rounded-xl text-sm shadow-lg'>
                <div className='flex mt-2'>
                <SiLinkedin className='p-0 text-lg mr-2' />
                <p className='p-0'>LinkedIn</p>
                </div>
              </div>
              <div className='flex flex-col mt-10 relative border-2 p-5 rounded-xl text-sm shadow-lg'>
                <div className='flex mt-2'>
                <SiGithub className='p-0 text-lg mr-2' />
                <p className='p-0'>Github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
    </main>
  );
};

export default HeroSection;