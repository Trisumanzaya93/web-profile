/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  IconHome,
} from "@tabler/icons-react";
import { SlDocs } from "react-icons/sl";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import { cn } from "@/lib/utils";

import { FloatingDock } from "@/components/ui/floating-dock";


const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "",
  },

  {
    title: "Docs",
    icon: (
      <SlDocs className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "comming-soon",
  },
  {
    title: "SZ-UI",
    icon: (
      <div className="w-full h-full bg-white flex justify-center items-center rounded-md">
        <Image
          src="/images/sumanzaya-logo.png"
          alt="startup template"
          width={40}
          height={40}
        />
      </div>
    ),
    href: "comming-soon",
  },
  {
    title: "Playground",
    icon: (
      <div className="w-full h-full bg-white flex justify-center items-center rounded-md">
        <Image
          src="/images/playground.png"
          alt="startup template"
          width={50}
          height={50}
        />
      </div>
    ),
    href: "comming-soon",
  },
];

function Footer(props: any) {
  const lastScrollY = useRef(0);

  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = props.scrollReff.current;
    if (!el) return;

    const handler = () => {
      const scrollY = el.scrollTop;

      if (scrollY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = scrollY;
    }

    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);


  return (

    <nav className="top-full" style={{
      position: 'sticky',
      top: '90%',
      zIndex: 100
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: 100,
          }}
          animate={{
            y: visible ? 0 : 100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            `w-screen sticky top-0 px-7 h-20 flex items-center justify-around`,
            // className
          )}
        >
          <FloatingDock
            items={links}
          />
        </motion.div>
      </AnimatePresence>
    </nav>
  )
}

export default Footer