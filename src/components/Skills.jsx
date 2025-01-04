import { useContext } from "react";
import { Element } from "react-scroll";
import { ServerContext } from "../contexts/ServerProvider";
import { TypeAnimation } from "react-type-animation";
import JSimg from "/assets/JavaScript.png";
import reactImg from "/assets/React.webp"
import nodeImg from "/assets/nodejs.png"
import tailwindImg from "/assets/tailwind.png"
import gitImg from "/assets/Git.png"
import firebaseImg from "/assets/Firebase.png"
import expressImg from "/assets/express-js.png"
import mongoImg from "/assets/mongodb.png"

const Skills = () => {
  const serverDomain = useContext(ServerContext);

  return (
    <Element name="skills" className="min-h-screen">
      <div className="text-center py-[5rem]">
        <TypeAnimation
          cursor={false}
          sequence={["Skills", 3000, "S"]}
          speed={50}
          wrapper="h1"
          repeat={Infinity}
          style={{
            fontSize: "2.5rem",
            lineHeight: "3rem",
            letterSpacing: "3px",
            display: "inline-block",
            fontWeight: "500",
            // marginBottom: "2rem",
          }}
          className="jersey"
        />
      </div>
      <div className="max-w-[80%] mx-auto">
        <h1 className="text-2xl font-bold mb-6">Top Skills</h1>
        <div className="flex flex-wrap gap-6">
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={JSimg} alt="js" className="w-20" />
            <p className="font-bold">JavaScript</p>
          </div>
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={reactImg} alt="react" className="w-20" />
            <p className="font-bold">React JS</p>
          </div>
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={nodeImg} alt="node" className="w-20" />
            <p>Node JS</p>
          </div>
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={expressImg} alt="express" className="w-20" />
            <p>Express JS</p>
          </div>
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={mongoImg} alt="mongodb" className="w-20" />
            <p>MongoDB</p>
          </div>
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={firebaseImg} alt="firebase" className="w-20" />
            <p>Firebase</p>
          </div>
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={tailwindImg} alt="tailwind" className="w-20" />
            <p>Tailwind CSS</p>
          </div>
          <div className="p-2 rounded-md border-2 border-slate-700 text-center flex flex-col items-center hover:border-slate-300 transition-all duration-200">
            <img src={gitImg} alt="git" className="w-20" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
