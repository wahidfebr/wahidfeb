import Image from "next/image";
import Link from "next/link";
import SlideUp from "@/components/SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "TukarMainan",
    description:
      "TukarMainan is a mobile and web based application for trading children's toys with other users.",
    image: "/tukarmainan.png",
    github: "https://github.com/TukarMainan",
    link: "https://www.canva.com/design/DAFiq4EBy1U/RDadEyufS2pibxXgXW9k1w/edit?utm_content=DAFiq4EBy1U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    name: "MeStore",
    description:
      "MeStore is a mobile and web based application clone of Xiaomi Store Indonesia.",
    image: "/mestore.png",
    github: "https://github.com/wahidfebr",
    link: "https://mestore-30051.web.app",
  },
  {
    name: "Gudang Tools",
    description:
      "Gudang Tools is a web based app to use and subscribe to online tools like checking password breach and monitor idx stocks asset.",
    image: "/gudangtools.png",
    github: "https://github.com/wahidfebr",
    link: "https://gudangtools-client.web.app",
  },
  {
    name: "Rent Room",
    description: "Rent Room is a web based app where customers can book rooms.",
    image: "/rentroom.png",
    github: "https://github.com/wahidfebr",
    link: "https://rent-room-customer.web.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
