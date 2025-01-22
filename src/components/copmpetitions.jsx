// import ShineBorder from "@shadcn/ui/components/ui/shine-border";
import ShineBorder from "../@shadcn/ui/components/ui/shine-border";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export function CompetitionsDemo() {
  const imageUrl1 ="./assets/images/cna/businessgame.jpg";
  const imageUrl2 ="./assets/images/cna/20230204_165317.jpg";
  const imageUrl3 ="./assets/images/cna/20230204_135635.jpg";
  return (
//     <ShineBorder
//   className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
//   color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
// >
//   <div className="h-full w-full flex items-center justify-center">
//     <DirectionAwareHover imageUrl={imageUrl3}>
//       <p className="font-bold text-xl">R&D Symposium</p>
//       <p className="font-normal text-sm">RnD Symposium is a unique competition held to mix the two fields of
                // entrepreneurship and research and development. The vision is to
                // introduce entrepreneurship to Research and MTech scholars who will
                // be using their research to produce feasible real-life applications
                // and help with their research.</p>
//     </DirectionAwareHover>
//   </div>
// </ShineBorder>
//     <ShineBorder
//   className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
//   color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
// >
//   <div className="h-full w-full flex items-center justify-center">
//     <DirectionAwareHover imageUrl={imageUrl2}>
//       <p className="font-bold text-xl">Invest-O-Spective</p>
//       <p className="font-normal text-sm"> A unique competition where you get to learn more about the process of
            // analyzing a startup to make an informed decision on a potential
            // investment. Participate and demonstrate your analytical,
            // communication, and presentation skills.</p>
//     </DirectionAwareHover>
//   </div>
// </ShineBorder>

<div className="flex flex-wrap justify-center gap-4">
  <div >
    <h2 className="font-bold text-lg mb-2">R&D Symposium</h2>
    <ShineBorder
      // className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-background md:shadow-xl box-border"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="h-full w-full flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl3}>
          <p className="font-bold text-xl">R&D Symposium</p>
          <p className="font-normal text-sm">
            RnD Symposium is a unique competition held to mix the two fields of
            entrepreneurship and research and development. The vision is to
            introduce entrepreneurship to Research and MTech scholars who will
            be using their research to produce feasible real-life applications
            and help with their research.
          </p>
        </DirectionAwareHover>
      </div>
    </ShineBorder>
  </div>

  <div >
    <h2 className="font-bold text-lg mb-2">Invest-O-Spective</h2>
    <ShineBorder
      // className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-background md:shadow-xl box-border"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="h-full w-full flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl2}>
          <p className="font-bold text-xl">Invest-O-Spective</p>
          <p className="font-normal text-sm">
            A unique competition where you get to learn more about the process
            of analyzing a startup to make an informed decision on a potential
            investment. Participate and demonstrate your analytical,
            communication, and presentation skills.
          </p>
        </DirectionAwareHover>
      </div>
    </ShineBorder>
  </div>

  <div>
    <h2 className="font-bold text-lg mb-2">Business Game</h2>
    <ShineBorder
      // className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-transparent bg-background md:shadow-xl box-border"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="h-full w-full flex items-center justify-center">
        <DirectionAwareHover imageUrl={imageUrl1}>
          <p className="font-bold text-xl">Business Game</p>
          <p className="font-normal text-sm">
            A unique competition where you get to learn more about the process
            of analyzing a startup to make an informed decision on a potential
            investment. Participate and demonstrate your analytical,
            communication, and presentation skills.
          </p>
        </DirectionAwareHover>
      </div>
    </ShineBorder>
  </div>
</div>


  );
}

