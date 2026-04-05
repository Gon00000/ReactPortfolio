import Card from "../components/Card"  
import { useRef } from "react"
import EmailButton from "../components/EmailButton";
import {FrameWork} from "../components/FrameWork";
const About = () => {
  const grid2container=useRef();

  return (
    <section id="About" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
       {/* Grid 1 */}
<div className="relative flex items-end overflow-hidden grid-default-color grid-1">
  <img
    src="assets/PIC.png"
    className="absolute inset-0 w-full h-full object-cover object-top"
  />
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-radient-to-t from-black/70 via-transparent to-transparent" />
  {/* Text */}
  <div className="relative z-10 p-4">
    <p className="text-white font-bold text-lg">Hi I'm Psalmer Gon Clarabal</p>
    <p className="text-white/80 text-sm">For the past 4 years, I've been building my skills in frontend and backend development, turning ideas into real web applications.</p>
  </div>
</div>
       
        {/* Grid 2 */}  
             <div ref={grid2container} className="grid-default-color grid-2"><div className="flex items-center justify-center w-full h-full">
              
              <Card style={{rotate:"75deg", top: "30%", left:"70%"}}image="assets/logos/vitejs.svg" containerRef={grid2container}/>
              <Card style={{rotate:"-30deg", top: "60%", left:"45%"}}containerRef={grid2container}text="SOLID"/>
              <Card style={{rotate:"90deg", bottom: "30%", left:"70%"}}containerRef={grid2container}text="Design pattern"/>
              <Card style={{rotate:"-45deg", top: "55%", left:"0%"}}containerRef={grid2container}text="Design principles"/>
              <Card style={{rotate:"20deg", top: "10%", left:"30%"}}containerRef={grid2container}text="REST API"/>
              <Card style={{rotate:"20deg", top: "10%", left:"30%"}} image="assets/logos/react.svg" containerRef={grid2container}/>
              <Card style={{rotate:"-45deg", top: "70%", left:"25%"}} image="assets/logos/express.webp  "containerRef={grid2container}/>
              </div></div>
{/* Grid 3 */}
<div className="relative overflow-hidden grid-black-color grid-3">
  <div className="z-20 w-[45%] p-6">
    <p className="headtext">Time Zone</p>
    <p className="subtext">I'm based in Philippines, and open to remote work worldwide</p>
  </div>
  <img
    src="assets/ph.webp"
    alt="Philippines map"
    className="absolute right-0 top-0 h-full w-[60%] object-cover object-center opacity-60"
  />
  <div className="absolute inset-y-0 left-[38%] w-28 bg-gradient-to-r from-[#1a1a2e] to-transparent z-10" />
</div>
            {/* Grid 4 */}
         <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap0-4 size-full">
            <p className="text-center headtext">Do you want to start a project together?</p>
          <EmailButton/>
            
            </div></div> 
           {/* Grid 5 */}
         <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">TECH STACK</p>
            <p className="subText"> I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWork/>
          </div>
         </div>
      </div>
    </section>
  )
}

export default About