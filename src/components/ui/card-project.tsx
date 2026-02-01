'use client';

import Image from 'next/image'
import ModalProject from './modal-project';
import { useState } from 'react';

type CardProjectProps = {
    title: string;
    description: string;
    isMobile: boolean;
    image: string[];
}

export default function CardProject(props: CardProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full h-full flex items-center justify-center bg-neutral-100 rounded-xl p-3'>
    <button onClick={()=> setIsOpen(true)} className="flex items-center justify-center rounded-xl bg-neutral-100 h-[260px]">
      <Image
        src={props.image[0]}
        alt={props.title}
        width={800}
        height={600}
        className="max-h-full w-auto object-contain"
      />
    </button>
      <ModalProject open={isOpen} setter={setIsOpen} images={props.image} title={props.title} />
    </div>
  )
}
