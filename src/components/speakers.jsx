import { cn } from "@/lib/utils";
import { Marquee } from "../@shadcn/ui/components/ui/marquee";

const reviews = [
    {
      name: "Abhijit",
      username: "CEO MD Chairman Berger Paints",
      body: "Abhijit - CEO MD Chairman Berger Paints",
      img: "./assets/images/abhijit.jpeg",
    },
    {
      name: "Akur Rahman",
      username: "CTO at Hitachi Technologies",
      body: "Akur Rahman - CTO at Hitachi Technologies",
      img: "./assets/images/akilur-rahman.jpg",
    },
    {
      name: "Amit Kumar Agarwal",
      username: "Founder and CEO of Nobroker",
      body: "Amit Kumar Agarwal - Founder and CEO of Nobroker",
      img: "./assets/images/amit.avif",
    },
    {
      name: "Alakh Pandey",
      username: "Founder & CEO PhysicsWallah",
      body: "Alakh Pandey - Founder & CEO PhysicsWallah",
      img: "./assets/images/ges_speakers.jpeg",
    },
    {
      name: "Kanav Hasija",
      username: "Co-Founder InnovAccer",
      body: "Kanav Hasija- Co-Founder InnovAccer",
      img: "./assets/images/kanav.jpeg",
    },
    {
      name: "Pulkit Jain",
      username: "Co-founder Vedantu",
      body: "Pulkit Jain - Co-founder Vedantu",
      img: "./assets/images/pulkit.avif",
    },
    {
      name: "Sean Sohn",
      username: "CEO of Krafton India (PUBG India)",
      body: "Sean Sohn - CEO of Krafton India (PUBG India)",
      img: "./assets/images/sean.webp",
    },
    {
      name: "Suresh Prabhu",
      username: "Former Minister of Railways of India",
      body: "Suresh Prabhu - Former Minister of Railways of India",
      img: "./assets/images/suresh.jpeg",
    },
    {
      name: "Vishal Chaudhary",
      username: "CO-Founder Zetwerk",
      body: "Vishal Chaudhary - CO-Founder Zetwerk",
      img: "./assets/images/vishal.avif",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="96" height="96" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const MarqueeDemo = () => {
  return (
    // <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <div>
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
};

