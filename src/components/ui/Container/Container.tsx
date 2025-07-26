import React from 'react';
import type { Props } from './Container.type';

function Container({children}: Props) {
  return (
    <div className="w-[1440px]  h-full flex justify-center scroll-auto overflow-auto overscroll-x-none">
        {children}
    </div>
  )
}

export default Container