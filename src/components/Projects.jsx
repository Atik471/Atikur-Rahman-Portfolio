import { Element } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      title: "ServiceTrek",
      img: "https://i.ibb.co.com/Jrsv887/Screenshot-2025-01-05-103138.png",
      description:
        "ServiceTrek is a dynamic service review platform where users can browse and filter services, add reviews, and manage their personal service listings. It integrates a responsive design, JWT authentication, and Firebase for seamless functionality.",
      techStack: ["React JS", "Node JS", "MongoDB", "Express JS", "Firebase", "Tailwind CSS"],
      liveLink: "https://servicetrek-ff5f1.web.app/",
      githubLink: "https://github.com/Atik471/ServiceTrek_client",
    },
    {
      title: "CineVerse",
      img: "https://i.ibb.co.com/mh5tJL3/Screenshot-2025-01-05-103255.png",
      description:
        "Search for movies by genre, title, and year of release, add new movies, update or delete movies and more. Create account with email and google with firebase authentication.",
      techStack: ["React JS", "Node JS", "MongoDB", "Express JS", "Firebase", "Tailwind CSS"],
      liveLink: "https://cineverse-dffdc.web.app/",
      githubLink: "https://github.com/Atik471/Cineverse_client_ReactJS",
    },
    {
      title: "Eco Adventure",
      img: "https://i.ibb.co.com/Fq801Gy/Screenshot-2025-01-05-103213.png",
      description:
        "EcoAdventure is designed to provide users with a hassle-free way to discover, explore, and book eco-friendly adventures. It empowers users to manage their profiles, reset passwords, and explore curated adventures while maintaining a modern and user-friendly interface.",
      techStack: ["React JS", "Node JS", "Firebase", "Tailwind CSS"],
      liveLink: "https://eco-adventure-21e6c.web.app/",
      githubLink: "https://github.com/Atik471/Eco_Adventure_ReactJS",
    },
  ];

  return (
    <Element name="my-works" className="min-h-screen">
      <section className="py-12 w-[90%] mx-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">My Works</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300"
              >
                <img src={project.img} alt="img" />
                <h3 className="text-xl font-bold mb-2 text-black py-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <li
                        key={i}
                        className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Projects;
