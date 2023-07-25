import React from "react";

const skills = [
    { skill: "JavaScript" },
    { skill: "Java (Basic)" },
    { skill: "PHP (Basic)" },
    { skill: "Python (Basic)" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "Tailwind CSS" },
    { skill: "React Native" },
    { skill: "React.js" },
    { skill: "Vue.js" },
    { skill: "State Management (Redux, Pinia)" },
    { skill: "Node.js" },
    { skill: "Express.js" },
    { skill: "ORM (Sequelize.js)" },
    { skill: "SQL (PostgreSQL, MySQL)" },
    { skill: "NoSQL (MongoDB)" },
    { skill: "REST API" },
    { skill: "GraphQL" },
    { skill: "Redis" },
    { skill: "AWS" },
    { skill: "Git" },
    { skill: "GitHub" },
];

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Wahid and I am a{" "}
                            <span className="font-bold">
                                {"highly ambitious"}
                            </span>
                            ,
                            <span className="font-bold">
                                {" self-motivated"}
                            </span>
                            , and
                            <span className="font-bold">{" driven"}</span>{" "}
                            full stack developer based in Indonesia.
                        </p>
                        <br />
                        <p>
                            What excites me the most is the opportunity to
                            collaborate with a dynamic team and contribute my
                            expertise to enhance system functionality and drive
                            innovation. I am constantly seeking out new
                            challenges and opportunities to learn and grow in
                            the ever-evolving world of technology.
                        </p>
                        <br />
                        <p>
                            I invite you to explore my website to learn more
                            about my projects, experiences, and the journey that
                            has shaped me into the passionate tech enthusiast I
                            am today. If you share a similar passion for
                            creating cutting-edge solutions and pushing the
                            boundaries of what technology can achieve, let&apos;s
                            connect and explore how we can make a positive
                            impact together.
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
