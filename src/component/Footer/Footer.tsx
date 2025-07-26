import React from 'react'
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

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
  return (
    <div className="absolute bottom-0 w-full flex justify-center items-center">
        <FloatingDock
          mobileClassName="translate-x-20" // only for demo, remove for production
          items={links}
        />
    </div>
  )
}

export default Footer