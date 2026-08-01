'use client';

import React, { useState } from 'react';
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
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';
import { MdOutlineMail } from "react-icons/md";
import ComputerCanvas from "@/component/Desktop/Desktop";
import DotGrid from '../DotGrid/DotGrid';
import TrueFocus from '../TrueFocus/TrueFocus';
import Footer from '@/component/Footer/Footer';
import { Timeline } from '../timeline';
import LogoLoop from '../../LogoLoop'
import Image from "next/image";
import Carousel from '../carousel';
import Lanyard from '../../Lanyard'
import { Progress } from "@/components/ui/progress"
import { useProgress } from '@react-three/drei';
import {
  motion,
  AnimatePresence,
} from "motion/react";

import { ENV } from '@/lib/constants';
import ModalJourney from '../modal-journey';
import CardProject from '../card-project';

type Props = {
  scrollReff: React.RefObject<HTMLDivElement>;
  displayDock: boolean;
}

type Journey = {
  setShowModalJourney: (value: boolean) => void;
  setModalContent: (value: object) => void;
}

type TechLogos = {
  node: React.ReactNode;
  title: string;
  href: string;
}

type LoaderProps = {
  progress: number;
}

const experiencesSmbc = [
  "Researched OCR mechanisms and delivered a QRIS revamp (Jenius).",
  "Designed and delivered products from concept to MVP (Jenius Daya).",
  "Served as PIC for end-to-end QRIS feature development (Jenius Daya).",
  "Improved overall code quality through SonarQube integration.",
  "Led the revamp of the Awards screen to enhance user experience (Jenius).",
  "Enhanced the user registration flow with improved validation logic (Jenius).",
  "Developed a credit card reinstatement feature to support account recovery flows (Jenius).",
  "Resolved production issues related to camera rotation (BisnisKit).",
  "Designed and implemented Registration V2 to improve onboarding reliability (BisnisKit).",
];

const experiencesFazztech = [
  "Delivered assignment features for the Digi Expert web platform",
];

const Journey = (setter: Journey) => {

  return [
    {
      title: "2022",
      content: (
        <button className='w-full text-left' onClick={() => {
          setter.setModalContent(experiencesFazztech);
          setter.setShowModalJourney(true);
        }}>
          <p className="text-lg text-white font-bold">
            Fazztech - Front End Developer
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10 mb-10">
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
        </button>
      ),
    },
    {
      title: "2023 - Now",
      content: (
        <button onClick={() => {
          setter.setModalContent(experiencesSmbc);
          setter.setShowModalJourney(true);
        }} className='w-full text-left'>
          <p className="text-lg mb-8 text-white font-bold">
            SMBCI - Digital Banking Solution Developer
          </p>
          <div className='grid grid-cols-2 gap-4 mt-10'>
            <Image
              src="/images/jenius.png"
              alt="Jenius"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg bg-red  md:h-44 lg:h-44"
            />
            <div className='flex justify-center items-center'>
              <Image
                src="/images/jenius-daya.png"
                alt="Jenius"
                width={500}
                height={500}
                className="h-20 w-20 md:w-1/2 rounded-lg bg-red  md:h-44 lg:h-44"
              />
            </div>
            <Image
              src="/images/bisniskit.png"
              alt="Jenius"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg bg-red  md:h-44 lg:h-44"
            />
          </div>
        </button>
      ),
    },
  ];
}

const techLogos: TechLogos[] = [
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

const projectCollection = [
  {
    title: "Indosat x BFI",
    description: "A digital talent management platform",
    isMobile: true,
    image: ["/images/indosat1.png", "/images/indosat2.png", "/images/indosat3.png", "/images/indosat4.png"],
  },
  {
    title: "Queue Management System",
    description: "desa negara ratu",
    isMobile: false,
    image: ["/images/desa1.png", "/images/desa2.png", "/images/desa3.png"],
  },
  {
    title: "Smartax",
    description: "A digital talent management platform",
    isMobile: false,
    image: ["/images/smartax1.png", "/images/smartax2.png", "/images/smartax3.png", "/images/smartax4.png"],
  },
  {
    title: "Coffee Shop",
    description: "coffee shop",
    isMobile: false,
    image: ["/images/coffeshop1.png", "/images/coffeshop2.png", "/images/coffeshop3.png"],
  },
  {
    title: "Zwallet",
    description: "Zwallet",
    isMobile: false,
    image: ["/images/zwallet1.png", "/images/zwallet2.png", "/images/zwallet3.png"],
  },
  {
    title: "Razz E-commerce",
    description: "razz e-commerce",
    isMobile: false,
    image: ["/images/razz1.png", "/images/razz2.png", "/images/razz3.png"],
  },
  {
    title: "Vehicle Rental",
    description: "Vehicle Rental",
    isMobile: false,
    image: ["/images/vehicle1.png", "/images/vehicle2.png", "/images/vehicle3.png"],
  },
];

const Loader = (props: LoaderProps) => {

  return (
    <div className="absolute flex w-3/4 h-full items-center justify-center flex-col px-4 py-2 rounded-xl text-black text-xl font-geist font-extrabold mx-20">
      <Progress value={props.progress} />
      <p className='mt-5'>{props.progress.toFixed(0)}% </p>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 }
}

const fadeUpSoft = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
}

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1 }
}

function HeroSection(props: Props) {
  const [showModalJourney, setShowModalJourney] = useState(false);
  const [modalContent, setModalContent] = useState<object | null>(null);
  const { progress } = useProgress()

  return (
    <main className='flex flex-col items-center -mt-20'>
      {props.displayDock && <Footer scrollReff={props.scrollReff} />}
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
        <div className="w-full h-full flex flex-col lg:flex-row mt-0 justify-center text-white font-geist">
          <div className='w-full lg:h-full flex justify-center items-center px-0'>
            <motion.div
              className='mr-0 lg:mr-20'
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.2 }}
                className="text-left text-3xl lg:text-5xl font-extrabold mb-4 fade-in-20 ring-offset-8"
              >
                Hi, I’m
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
                className="text-left text-3xl lg:text-5xl font-extrabold"
              >Tri Sumanzaya</motion.h1>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="w-full inline-block h-[5px] origin-left bg-[#4F8CFF] mb-2"
              />
              <motion.div
                className='flex items-center flex-row'
                variants={fadeUp}
                transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
              >
                <TrueFocus
                  sentence="Software Mobile"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="#1A535C"
                  animationDuration={3}
                  pauseBetweenAnimations={1}
                />
                <div className='flex justify-center items-center ml-5'>
                  <p className=" text-xl lg:text-2xl font-extrabold">Engineer.</p>
                </div>
              </motion.div>
              <motion.p
                className="font-extrabold text-lg  md:text-left mt-2"
                variants={fade}
                transition={{ duration: 0.25, delay: 0.65 }}
              >Practical code, Real impact.</motion.p>
            </motion.div>

          </div>
          <div className='w-full justify-center items-center hidden lg:flex'>
            <motion.div
              className='w-[350px] h-[200px] lg:w-[550px] lg:h-[400px] bg-white relative overflow-hidden'
              style={{ borderRadius: '19% 81% 17% 83% / 77% 15% 85% 23%' }}
              variants={scaleIn}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
            >
              {progress < 100 && <Loader progress={progress} />}
              <ComputerCanvas className="absolute inset-0 h-full w-full rounded-[inherit]" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center flex-col bg-[#1A535C] bg-[url("/images/bgtimeline.png")] pb-20'>

        <Timeline data={Journey({ setShowModalJourney, setModalContent })} />
      </div>
      <div className='w-full flex justify-center bg-white font-geist pb-20'>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-150px" }}
          className='w-full lg:max-w-[1440px] font-bold'
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-150px" }}
            className="w-full lg:max-w-[1440px] mx-auto py-20 px-4 md:px-8 lg:px-20"
          >
            <motion.h2
              variants={fadeUpSoft}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-lg md:text-4xl mb-4  max-w-4xl font-bold"
            >
              Project Collection
            </motion.h2>
            <motion.p
              variants={fadeUpSoft}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className=" text-sm md:text-base max-w-md"
            >
              Selected Side Projects.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUpSoft}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-20 mb-16"
          >
            {projectCollection.map((item, index) => (
              <CardProject {...item} key={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className='w-full flex justify-center font-geist pb-20'>
        <div className='w-full lg:max-w-[1440px]'>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-150px" }}
            className="w-full lg:max-w-[1440px] mx-auto py-20 px-4 md:px-8 lg:px-20 font-bold"
          >
            <motion.h2
              variants={fadeUpSoft}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold"
            >
              Toolkit
            </motion.h2>
            <motion.p
              variants={fadeUpSoft}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className=" text-sm md:text-base text-white max-w-md"
            >
              Core tools that drive my development journey
            </motion.p>
          </motion.div>
          <div className='lg:max-w-[1440px] px-10'>
            <LogoLoop
              {...({
                logos: techLogos,
                speed: 120,
                direction: "left",
                logoHeight: 100,
                gap: 60,
                pauseOnHover: true,
                scaleOnHover: true,
                fadeOut: true,
                fadeOutColor: "#000000",
                ariaLabel: "Technology partners",
              } as any)}
            />
          </div>
          <div className="relative overflow-hidden w-full h-full pb-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-150px" }}
              className="w-full lg:max-w-[1440px] mx-auto py-20 px-4 md:px-8 lg:px-20 font-bold"
            >
              <motion.h2
                variants={fadeUpSoft}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-bold"
              >
                Certificate
              </motion.h2>
              <motion.p
                variants={fadeUpSoft}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className=" text-sm md:text-base text-white max-w-md"
              >
                Certificates earned along the journey
              </motion.p>
            </motion.div>
            <Carousel slides={slideData} />
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center bg-white relative'>
        <div className='w-full lg:max-w-[1440px] h-screen flex justify-between font-geist'>
          <div className='z-10 flex flex-col justify-start items-center md:justify-center'>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, }} className="max-w-7xl mx-auto py-20 px-4 md:px-20 lg:px-20">
              <motion.h2
                variants={fadeUpSoft}
                transition={{ duration: 0.6,delay: 0.5, ease: "easeOut" }}
                className="text-lg md:text-4xl mb-4 text-black max-w-4xl font-bold"
              >
                Contact
              </motion.h2>
              <motion.p
                variants={fadeUpSoft}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="text-black text-sm md:text-base max-w-md font-bold"
              >
                Building a new team?<br /> I help teams build and scale high-quality digital products. Let’s connect.
              </motion.p>
              <div className='w-full grid grid-cols-2 gap-10 mt-10 font-bold'>
                <button
                  className='flex flex-col relative border-2 py-2 px-5 md:p-5  rounded-xl text-sm shadow-lg text-left'
                  onClick={() => open(ENV.github)}
                >
                  <div className='flex mt-2'>
                    <SiGithub className='p-0 text-lg mr-2' />
                    <p className='p-0 '>Github</p>
                  </div>
                </button>

                <button
                  className='flex flex-col relative border-2  py-2 px-5 md:p-5 rounded-xl text-sm shadow-lg'
                  onClick={() => open(ENV.linkedin)}
                >
                  <div className='flex mt-2'>
                    <SiLinkedin className='p-0 text-lg mr-2' />
                    <p className='p-0'>LinkedIn</p>
                  </div>
                </button>
                <button
                  className='flex flex-col relative border-2  py-2 px-5 md:p-5 rounded-xl text-sm shadow-lg'
                  onClick={() =>
                    open(
                      `https://wa.me/${ENV.whatsapp}`
                    )
                  }
                >
                  <div className='flex mt-2'>
                    <MdOutlineMail className='p-0 text-lg mr-2' />
                    <p className='p-0'>Whatsapp</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='absolute  w-full h-full'>
          <div className='relative h-full'>
            <Lanyard position={[0, 0, 40]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
      <ModalJourney open={showModalJourney} setter={setShowModalJourney} content={modalContent} />
    </main>
  );
};

export default HeroSection;