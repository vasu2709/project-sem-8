"use client";
import React, { useState, useEffect } from 'react';
import './Img2.components.css'
const MyComponent: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './images/slider2.jpg',
    './images/slider1.jpg',
    './images/slider3.jpg',
  ];
  const texts = ['FALL / SUMMER terrsdium collection', 'FALL / SUMMER plant collection', 'FALL / SUMMER succutents collection'];

  useEffect(() => {
    const interval = setInterval(() => {
      toggleImages();
    }, 9000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const toggleImages = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product Image ${index + 1}`}
          className={index === currentImageIndex ? '' : 'hidden'}
        />
      ))}
      <button className='border-2 bg-blue-900 text-slate-200 rounded-md ' onClick={toggleImages}>Show Next Image</button>

      <div className="line">
        <h2 className="lineUp" id="lineText">
          {texts[currentImageIndex]}
        </h2>
      </div>

      
    </div> 
  );
};

export default MyComponent; 
