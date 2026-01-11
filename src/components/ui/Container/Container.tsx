import React from 'react';
import type { Props } from './Container.type';

function Container({children}: Props) {

  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className={`w-full h-[${height}] flex flex-col justify-center overflow-auto scroll-auto`}>
        {children}
    </div>
  )
}

export default Container