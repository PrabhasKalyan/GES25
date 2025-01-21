import { AnimatedTestimonials } from "../../src/@shadcn/ui/components/ui/animated-testimonials.jsx";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        " Distinguished speakers deliver impactful addresses, providing insights, inspiration, and setting the tone for GES with their expertise in entrepreneurship.",
      name: "Keynote Sessions",
      src: "./assets/images/events/keynote.png",
    },
    {
      quote:
        "Interactive sessions where participants engage in hands-on activities, fostering skill development, and practical knowledge in various aspects of entrepreneurship.",
      name: "Workshops",
      src: "./assets/images/events/workshop.png",
    },
    {
      quote:
        "Intimate conversations between accomplished individuals, offering a relaxed platform to discuss personal experiences, challenges, and strategies in the entrepreneurial journey.",
      name: "Fireside Chats",
      src: "./assets/images/events/fireside.png",
    },
    {
      quote:
        "Engaging talks delivered by entrepreneurs, innovators, and industry leaders, sharing their experiences, lessons learned, and insights, contributing to the intellectual discourse at GES.",
      name: "E-Talks",
      src: "./assets/images/events/etalk.png",
    },
    {
      quote:
        "Experts from diverse fields come together to explore and debate on current trends, challenges, and opportunities in the entrepreneurial ecosystem, providing a comprehensive view.",
      name: "Panel Discussions",
      src: "./assets/images/events/panel.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

