"use client"

import { useState, useEffect } from 'react';
import github from '@public/assets/github.svg';
import Image from 'next/image';

const GitBtn = () => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const startShaking = () => {
      setIsShaking(true);
      // After a short duration, stop shaking and reset background color to white
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    };

    const intervalId = setInterval(startShaking, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.open('https://github.com/minhajHameed')}
      className={`fixed bottom-8 right-14 z-10 py-2 px-2 rounded-lg  ${
        isShaking ? 'bg-yellow-400 shake shadow-yellow' : 'bg-stone-50 text-white shadow-md shadow-cyan-50/50'
      }`}
    >
      <Image src={github} alt="github" className="w-8 bg-transparent object-contain" />
    </button>
  );
}

export default GitBtn;

