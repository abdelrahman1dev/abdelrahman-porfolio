"use client";
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface props {
    ClassName: string;
    source: string;
}


function Animations({source , ClassName}: props) {
  return (
    <div>
      <DotLottieReact
      src={source}
      className={ClassName}
      loop
      autoplay
    />
    </div>
  )
}

export default Animations
