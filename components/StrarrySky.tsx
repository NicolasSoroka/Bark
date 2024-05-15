/* 
If using tailwind : 
Add this to tailwind.config
theme: {
      extend: {
        animation: {
          fade: 'fadeIn 2s ease-in-out alternate infinite',
        },
  
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        },
      },
  },

*/

import React, { useState, useEffect } from 'react';

interface Star {
  id: number;
  opacity: number;
  top: number;
  left: number;
  size: number;
}

const StarrySky: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const star: Star = {
        id: Math.random(),
        opacity: 0,
        size: Math.random() * 2 + 1,
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
      };

      setStars((prevStars) => [...prevStars, star]);

      setTimeout(() => {
        fadeOutStar(star.id);
      }, 2000);
    };

    const fadeOutStar = (id: number) => {
      setStars((prevStars) =>
        prevStars.map((star) =>
          star.id === id ? { ...star, opacity: 0 } : star
        )
      );

      setTimeout(() => {
        removeStar(id);
      }, 2000);
    };

    const removeStar = (id: number) => {
      setStars((prevStars) => prevStars.filter((star) => star.id !== id));
    };

    const interval = setInterval(createStar, Math.random() * 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-100 h-100">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-fade"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default StarrySky;