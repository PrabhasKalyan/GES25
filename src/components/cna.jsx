import React from "react";
import { ContainerScroll } from "../../src/@shadcn/ui/components/ui/container-scroll-animation";
import { ThreeDCardDemo } from "./3dcard";
import '../../src/index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";



export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Competitions <br />
            </h1>
          </>
        }>
        {/* <img
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} /> */}
          <Swiper  spaceBetween={10}
        slidesPerView={1}
        modules={[Autoplay]}
      autoplay={{
        delay: 1500, // Time between auto-swipes (in milliseconds)
        disableOnInteraction: false, // Keeps autoplay active even after user interactions
      }}>
        <SwiperSlide style={{background:"none"}}>
          <ThreeDCardDemo
          title="Business Game"
          image="assets/images/cna/businessgame.jpg"
          description="Business game is a competition consisting of four parts to solve real world problems in order to test analytical skills and entrepreneurial mind." />
        </SwiperSlide >
        <SwiperSlide style={{background:"none"}}>
          <ThreeDCardDemo
          title="Invest-O-Spective"
          image="assets/images/cna/20230204_165317.jpg"
          description="A unique competition where you get to learn more about the process of analyzing a startup to make an informed decision on a potential investment. Participate and demonstrate your analytical, communication, and presentation skills." />
        </SwiperSlide>
        <SwiperSlide style={{background:"none"}}>
          <ThreeDCardDemo
          title="R&D Symposium"
          image="assets/images/cna/20230204_135635.jpg"
          description="RnD Symposium is a unique competition held to mix the 2 fields of entrepreneurship and research and development. The vision is to introduce entrepreneurship to Research and Mtech scholars who will be using their research to produce feasible real-life applications and help with their research." />
        </SwiperSlide>
      </Swiper>
      </ContainerScroll>
    </div>)
  );
}


export const Competitions=()=>{
    return(
        <HeroScrollDemo />
    )
  }