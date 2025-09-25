
import React, { useState } from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

import { FloatingDock } from "@/components/ui/floating-dock";


const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "learning",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },
];

function Footer() {

  const { scrollYProgress, scrollY } = useScroll();
 
  const [visible, setVisible] = useState(true);
  
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
      if(scrollYProgress.get() > 5){
        setVisible(false)
      }else if (direction < 0) {
        setVisible(true)
      }else{
        setVisible(false)
      }
    }
  });
  return (

    <nav style={{
      position:'sticky',
      top: '90%',
      zIndex:100
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
          `w-screen sticky z-50 top-0 px-7 h-20 flex items-center justify-around`,
          // className
        )}
      >
        <FloatingDock
          // mobileClassName="translate-x-20" // only for demo, remove for production
          items={links}
        />
      </motion.div>
    </AnimatePresence>
     </nav>
  )
}

export default Footer