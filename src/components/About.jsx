import { Element } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import atik1 from "/assets/atik_aiub.jpg";
import atik2 from "/assets/atik_Github.jpg";

const About = () => {
  return (
    <Element name="about" className="min-h-screen">
      <div className="text-center">
        <TypeAnimation
          cursor={false}
          sequence={["About Me", 3000, "A"]}
          speed={50}
          wrapper="h1"
          repeat={Infinity}
          style={{
            fontSize: "2.5rem",
            lineHeight: "3rem",
            letterSpacing: "3px",
            display: "inline-block",
            fontWeight: "500",
            marginBottom: "3rem",
          }}
          className="jersey"
        />
        <div className="grid grid-cols-3 mx-auto md:max-w-[80%] gap-6 text-left">
          <p className="col-span-2 mt-2 mx-auto leading-[1.75rem] slide-in-left">
            I am a third-year <b>BSc student in Computer Science and
            Engineering</b> at American International University-Bangladesh (<b>AIUB</b>).
            My academic journey has been driven by a deep passion for <b>artificial
            intelligence, bioinformatics, mathematics</b>, and the ever-evolving
            world of computer science.
            <br /> <br />
            Alongside my academic pursuits, I actively engage in programming
            challenges, software development projects, and research to expand my
            skills and apply theoretical knowledge to practical solutions.
          </p>
          <img src={atik1} alt="atik1" className="rounded-lg border-2 border-[#334979] p-1 max-h-[20rem] slide-in-right" />
        </div>
        <div className="grid grid-cols-3 mx-auto md:max-w-[80%] text-left mt-[5rem]">
        <img src={atik2} alt="atik2" className="rounded-lg border-2 border-[#334979] p-1 max-h-[20rem] mx-auto slide-in-left" />
        <p className="col-span-2 mt-2 mx-auto leading-[1.75rem] slide-in-right">
          I am a professional <b>full-stack developer</b> early in my career,
          with a passion for exploring and experimenting with new technologies.
          I am a <b>quick learner</b>, capable of mastering new technologies
          rapidly, and I am always eager to expand my skill set.
          <br />
          My goal is to create{" "}
          <b>efficient, elegant, and impactful softwares</b> that solve
          real-world problems while providing value to users.
        </p>
          
        </div>

        {/* <p>
          I am a hobby programmer who loves solving complex problems. Outside of
          programming, I love spending time with my family and hanging out with
          friends, playing games, watching movies, and engaging in many other
          activities that give me a peaceful time.
        </p> */}
      </div>
    </Element>
  );
};

export default About;
