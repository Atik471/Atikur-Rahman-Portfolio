import atikImg from "/assets/Atik.jpg";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 h-[95vh] gap-8 px-[5%] mx-auto">
      <div className="flex flex-col text-center justify-center items-center mx-auto md:max-w-[95%] gap-6">
        <TypeAnimation
          cursor={false}
          sequence={["Hi, I’m Atikur Rahman – a Full Stack Developer!"]}
          speed={70}
          wrapper="h1"
          // repeat={Infinity}
          style={{
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            display: "inline-block",
            fontWeight: "700",
          }}
        />
        
        <TypeAnimation
          cursor={false}
          sequence={[1500, "I build modern, scalable, and user-friendly websites with React, Node.js, MongoDB, and more."]}
          speed={80}
          wrapper="p"
          // repeat={Infinity}
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.75rem",
            display: "inline-block",
          }}
        />
          
      </div>
      <div className="h-full flex items-center justify-center">
        <img
          src={atikImg}
          alt="atik"
          className="max-h-[24rem] rounded-xl p-1 border-2 border-[#334979]"
        />
      </div>
    </div>
  );
};

export default Banner;
