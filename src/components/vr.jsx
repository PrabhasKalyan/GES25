import React from "react";
import backgroundImage from "../../3386.jpg";
import ThreeDPhotoCarousel from "./3dcarousel.jsx";
import { ThreeDCardDemo } from "./3dcard";

const GESVRScene = () => {
  return (
    <a-scene embedded>
      {/* Background Scene */}
      <a-sky src={backgroundImage} rotation="0 -90 0"></a-sky>
      <a-entity camera look-controls>
        
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
       <ThreeDCardDemo title="Intern Carnival"
   image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   description="Intern Carnival is a curated event providing startups an exciting opportunity to hire interns from a pool of talented IIT Kharagpur students and enthusiastic GES '24 participants." />
       <ThreeDCardDemo title="INVESTOR-STARTUP CONNECT"
       description="Provides opportunities to startups for funding and mentoring by industry experts, with a chance to pitch to investors from varied sectors and top VCs from the country and even abroad!"
       image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
       <ThreeDCardDemo 
       title="PRODUCT-EXPO"
       description="Showcase your innovative products in front of a vast audience comprising the tech-savvy generation of students, eminent entrepreneurs, industry leaders, and professors."
       image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div> 
      </a-entity>
    </a-scene>
  );
};

export default GESVRScene;

