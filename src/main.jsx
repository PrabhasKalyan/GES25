import { StrictMode } from 'react'
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobeDemo } from './components/globedemo.jsx'
import {HyperText} from "./components/hypertext.jsx";
import ThreeDPhotoCarousel from "./components/3dcarousel.jsx";
import { ThreeDCardDemo } from './components/3dcard.jsx';
import { BrowserRouter } from 'react-router-dom';
import RetroGrid from "../src/@shadcn/ui/components/ui/retro-grid.jsx"
import {AnimatedPinDemo} from "../src/components/cna3d.jsx"
import {AnimatedTestimonialsDemo} from "../src/components/events.jsx"
import { HeroScrollDemo,Competitions } from './components/cna.jsx';
import SimpleMenu from "../src/components/menu"
import { CompetitionsDemo } from '../src/components/copmpetitions';
import { MarqueeDemo } from '../src/components/speakers';
import ContactCard from '../src/components/team';


createRoot(document.getElementById('ges')).render(
  <HyperText>Genesis of Grandeur</HyperText>
)


createRoot(document.getElementById('globe')).render(
  <GlobeDemo />
)


createRoot(document.getElementById('speakers')).render(
  <BrowserRouter>
    <MarqueeDemo></MarqueeDemo>
  </BrowserRouter>  
)

createRoot(document.getElementById('cards2')).render(
  <BrowserRouter>
    <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
  </BrowserRouter>

)

createRoot(document.getElementById('cards3')).render(
  <BrowserRouter>
 <CompetitionsDemo></CompetitionsDemo>
  </BrowserRouter>
)

createRoot(document.getElementById('team')).render(
  <ContactCard></ContactCard>
)

createRoot(document.getElementById('cards1')).render(
  <BrowserRouter>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',flexWrap:'wrap' }}>
      <ThreeDCardDemo title="Intern Carnival"
  image="./assets/images/sna/5348769.jpg"
  description="Intern Carnival is a curated event providing startups an exciting opportunity to hire interns from a pool of talented IIT Kharagpur students and enthusiastic GES '24 participants." />
      <ThreeDCardDemo title="INVESTOR-STARTUP CONNECT"
      description="Provides opportunities to startups for funding and mentoring by industry experts, with a chance to pitch to investors from varied sectors and top VCs from the country and even abroad!"
      image="./assets/images/sna/1904.i109.030.investment online trading isometric.jpg" />
      <ThreeDCardDemo 
      title="PRODUCT-EXPO"
      description="Showcase your innovative products in front of a vast audience comprising the tech-savvy generation of students, eminent entrepreneurs, industry leaders, and professors."
      image="./assets/images/sna/2011.i504.024_isometric expo stand exhibition illustration.jpg" />
      <ThreeDCardDemo 
      title="Million At Stake"
      description="Step into the world of limitless possibilities at Million at Stake, where visionary ideas meet powerful investors. Empower your startup, raise the funds you need, and transform your dreams into a thriving reality with the perfect platform for growth."
      image="https://www.ecell-iitkgp.org/millionatstake/logo.png" />
      <ThreeDCardDemo 
      title="Empressario"
      description="
Empresario, IIT Kharagpur's annual business model competition, offers mentorship and a platform to pitch ideas to Venture Capitalists, Angel Investors, and Industry Leaders"
      image="https://www.ecell-iitkgp.org/images/empresario.jpeg" />
      
    </div>
  </BrowserRouter>
)

// createRoot(document.getElementById('team')).render(
//   <BrowserRouter>
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',flexWrap:'wrap' }}>
//       <ThreeDCardDemo title="Nihal Reddy"
//   image="https://media.licdn.com/dms/image/v2/D5603AQGg6ci4uvONqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722336124694?e=1743033600&v=beta&t=q_q845OsgIvSuEDDx1UOhEJ5mZHCBgX1ChGk-cD0EG4"
//   description="Contact: nihal.reddy@ecell-iitkgp.org" />
//       <ThreeDCardDemo title="INVESTOR-STARTUP CONNECT"
//       description="Contact: akriti.mishra@ecell-iitkgp.org"
//       image="https://media.licdn.com/dms/image/v2/D4D03AQHfCPXFgtJ34Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699365064844?e=1743033600&v=beta&t=IPIxtdgW45DKSAI1zqr2oGZvscE8sQmrAFDmDFNh8NY" />
//     </div>
//   </BrowserRouter>
// )
