import { Element } from "react-scroll";
import atikImg from "/assets/Atik.jpg";
import { TypeAnimation } from "react-type-animation";
import ScrollRevealWrapper from "../ScrollRevealWrapper";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <Element name="home" className="min-h-screen">
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
            sequence={[
              1500,
              "I build modern, scalable, and user-friendly websites with React, Node.js, MongoDB, and more.",
            ]}
            speed={80}
            wrapper="p"
            // repeat={Infinity}
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.75rem",
              display: "inline-block",
            }}
          />
          <button className="px-6 py-2 rounded-xl bg-white hover:bg-transparent transition-all duration-300 text-black hover:text-white font-bold border-2 border-transparent hover:border-white">
            <a
              href="path/to/your/Resume_Atikur_Rahman_CSE_CGPA 3.93.pdf"
              download="Resume_Atikur_Rahman_CSE_CGPA 3.93.pdf"
            >
              Download Resume
            </a>
          </button>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/atikur-rahman-9680262b4/" target="blank">
              <FaLinkedin style={{ width: "1.5rem", height: "auto" }} />
            </a>
            <a href="https://github.com/Atik471/" target="blank">
              <FaGithub style={{ width: "1.5rem", height: "auto" }}></FaGithub>
            </a>
            <a href="https://www.facebook.com/atikur.rahman.424121?mibextid=ZbWKwL" target="blank">
              <FaFacebook
                style={{ width: "1.5rem", height: "auto" }}
              ></FaFacebook>
            </a>
          </div>
        </div>

        <ScrollRevealWrapper animationType={"pop-up"}>
          <div className="h-full flex items-center justify-center pop-up">
            <img
              src={atikImg}
              alt="atik"
              className="max-h-[24rem] rounded-xl p-1 border-2 border-[#334979]"
            />
          </div>
        </ScrollRevealWrapper>
      </div>
    </Element>
  );
};

export default Banner;
