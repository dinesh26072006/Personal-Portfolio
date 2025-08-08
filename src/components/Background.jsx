
import React from 'react';
import img from '../assest/bgimage.jpg';  

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ 
          backgroundImage: `url(${img})`,
          backgroundColor: '#111827' 
        }}
      />
      
      {/* Overlay to darken the image if needed */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-soft-light blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-400/20 rounded-full mix-blend-soft-light blur-xl opacity-70 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-orange-400/20 rounded-full mix-blend-soft-light blur-xl opacity-70 animate-pulse delay-2000"></div>
    </div>
  );
};

export default Background;