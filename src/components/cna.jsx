// import React from "react";
// import { ContainerScroll } from "../../src/@shadcn/ui/components/ui/container-scroll-animation";
// import { ThreeDCardDemo } from "./3dcard";
// import '../../src/index.css';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
// import { Autoplay } from "swiper/modules";



// export function HeroScrollDemo() {
//   return (
//     (<div className="flex flex-col overflow-hidden">
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-4xl font-semibold text-white">
//               Competitions <br />
//             </h1>
//           </>
//         }>
//           <Swiper  spaceBetween={10}
//         slidesPerView={1}
//         modules={[Autoplay]}
//       autoplay={{
//         delay: 1500, // Time between auto-swipes (in milliseconds)
//         disableOnInteraction: false, // Keeps autoplay active even after user interactions
//       }}>
//         <SwiperSlide style={{background:"none"}}>
//           <ThreeDCardDemo
//           title="Business Game"
//           image="./assets/images/cna/businessgame.jpg"
//           description="Business game is a competition consisting of four parts to solve real world problems in order to test analytical skills and entrepreneurial mind." />
//         </SwiperSlide >
//         <SwiperSlide style={{background:"none"}}>
//           <ThreeDCardDemo
//           title="Invest-O-Spective"
//           image="./assets/images/cna/20230204_165317.jpg"
//           description="A unique competition where you get to learn more about the process of analyzing a startup to make an informed decision on a potential investment. Participate and demonstrate your analytical, communication, and presentation skills." />
//         </SwiperSlide>
//         <SwiperSlide style={{background:"none"}}>
//           <ThreeDCardDemo
//           title="R&D Symposium"
//           image="./assets/images/cna/20230204_135635.jpg"
//           description="RnD Symposium is a unique competition held to mix the 2 fields of entrepreneurship and research and development. The vision is to introduce entrepreneurship to Research and Mtech scholars who will be using their research to produce feasible real-life applications and help with their research." />
//         </SwiperSlide>
//       </Swiper>
//       </ContainerScroll>
//     </div>)
//   );
// }
// D

// export const Competitions=()=>{
//     return(
//         <HeroScrollDemo />
//     )
//   }

import React from "react";
import { ContainerScroll } from "../../src/@shadcn/ui/components/ui/container-scroll-animation";
import '../../src/index.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Competitions <br />
            </h1>
          </>
        }
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500, // Time between auto-swipes (in milliseconds)
            disableOnInteraction: false, // Keeps autoplay active even after user interactions
          }}
        >
          <SwiperSlide style={{ background: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // padding: "20px",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Business Game</h2>
              <img
                src="./assets/images/cna/businessgame.jpg"
                alt="Business Game"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  maxHeight:"400px",
                  borderRadius: "8px",
                  margin: "10px 0",
                }}
              />
              <p>
                Business game is a competition consisting of four parts to solve
                real-world problems in order to test analytical skills and an
                entrepreneurial mind.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // padding: "20px",
                borderRadius: "8px",
                height:"100%",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Invest-O-Spective</h2>
              <img
                src="./assets/images/cna/20230204_165317.jpg"
                alt="Invest-O-Spective"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  maxHeight:"400px",
                  borderRadius: "8px",
                  margin: "10px 0",
                }}
              />
              <p>
                A unique competition where you get to learn more about the process of
                analyzing a startup to make an informed decision on a potential
                investment. Participate and demonstrate your analytical,
                communication, and presentation skills.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ background: "none" }}>
            <div
              style={{
                display: "flex",
                height:"100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // padding: "20px",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>R&D Symposium</h2>
              <img
                src="./assets/images/cna/20230204_135635.jpg"
                alt="R&D Symposium"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  maxHeight:"400px",
                  borderRadius: "8px",
                  margin: "10px 0",
                }}
              />
              <p>
                RnD Symposium is a unique competition held to mix the two fields of
                entrepreneurship and research and development. The vision is to
                introduce entrepreneurship to Research and MTech scholars who will
                be using their research to produce feasible real-life applications
                and help with their research.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </ContainerScroll>
    </div>
  );
}

export const Competitions = () => {
  return <HeroScrollDemo />;
};
