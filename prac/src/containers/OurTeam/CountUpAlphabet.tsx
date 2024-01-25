'use client'
import React, { useEffect, useState } from 'react';
import style from './countup.module.css'

interface AnimatedAlphabetProps {
  requiredAlphabets: string[];
}

const AnimatedAlpha: React.FC<AnimatedAlphabetProps> = ({ requiredAlphabets }) => {
  const [displayedAlphabets, setDisplayedAlphabets] = useState<string[]>([]);

  useEffect(() => {
    const animationFrames: number[] = [];
    setDisplayedAlphabets(requiredAlphabets.map(() => ''));

    const animateAlphabet = (index: number) => {
      animationFrames[index] = requestAnimationFrame(() => {
        setDisplayedAlphabets((prevAlphabets) => {
          const currentCharCode = prevAlphabets[index] ? prevAlphabets[index].charCodeAt(0) : 'A'.charCodeAt(0);
          const targetCharCode = requiredAlphabets[index].charCodeAt(0);

          const nextAlphabet =
            currentCharCode < targetCharCode ? String.fromCharCode(currentCharCode + 1) : requiredAlphabets[index];

          return Object.assign([...prevAlphabets], { [index]: nextAlphabet });
        });

        if (displayedAlphabets[index] !== requiredAlphabets[index]) {
          animateAlphabet(index);
        }
      });
    };

    requiredAlphabets.forEach((_, index) => {
      setTimeout(() => {
        animateAlphabet(index);
      }, (index + 1) * 100); // Adjust the delay (in milliseconds) to make it slower and start each alphabet one after another
    });

    return () => {
      animationFrames.forEach((id) => cancelAnimationFrame(id));
    };
  }, [requiredAlphabets]);

  return (
    <div className="text-center">
      {displayedAlphabets.map((alphabet, index) => (
        <p key={index} className="text-heading2 font-bold mx-2 inline-block">
          {alphabet}
        </p>
      ))}
    </div>
  );
};

export default AnimatedAlpha;
