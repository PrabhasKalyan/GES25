import React from "react";
import { CardBody, CardContainer, CardItem } from "../@shadcn/ui/components/ui/3d-card";
import { Link } from "react-router-dom";
import "../index.css";

export function ThreeDCardDemo({title,image,description}) {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className="bg-gray-900  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto sm:h-[27rem] rounded-xl p-4 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-300">
          {title}
        </CardItem>
        
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="700"
            width="700"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-200">
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>)
  );
}
