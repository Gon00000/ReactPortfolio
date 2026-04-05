import { OrbitingCircles } from "./OrbitCircle"

export function FrameWork() {
    const skills = [
        "github",
        "react",
         "git",
          "html5",
           "javascript",
             "vitejs",
              "tailwindcss",
                "css3",
                "php2",
                "mysql",  
                "mongodb",
                "visualstudiocode",
                "postman",
                 

    ];  
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
       {skills.map((skills, index) =>( 
        <Icon key={index} src={`assets/logos/${skills}.svg`} /> 
    ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
         {skills.reverse().map((skills, index) =>( 
        <Icon key={index} src={`assets/logos/${skills}.svg`} /> 
    ))}
      </OrbitingCircles>
    </div>
  )
}
const Icon=({src}) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />

);
