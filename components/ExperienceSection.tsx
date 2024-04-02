"use client"; // this is a client component

const experiences = [
  {
    company: "PT Ragdalion Revolusi Industri",
    date: "September 2023 - Present",
    title: "Backend Developer",
    points: [
      "Succeeded led and managed 6+ distinct projects as the lead backend developer at PT Ragdalion Revolusi Industri",
      "Applied backend development skills to projects for manufacturing companies, such as PT Autoplastik Indonesia, PT NSK Bearings Manufacturing Indonesia, and PT Astra Otoparts Divisi Nusametal",
      "Developed a deep understanding of industry-specific requirements, contributing to the creation of tailored solutions for manufacturing clients",
      "Delivered 5+ projects within a remarkable 1 to 2 month timeframe, highlighting a track record of delivering high-quality solutions on time",
    ],
  },
  {
    company: "Hacktiv8 Indonesia",
    date: "January 2023 - May 2023",
    title: "Bootcamp FullStack Javascript Immersive",
    points: [
      "Graduated with predicate Teachers Awards as the Top 3 Students",
      "Gained proficiency in popular Frontend frameworks (React, Vue), Backend frameworks (Node.js, Express), alongside DevOps practices through a challenging and intensive bootcamp",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="mx-auto">
          {experiences.map((item, idx) => (
            <div key={idx} className="p-6 mb-4">
              <h3 className="text-2xl font-bold mb-2">{item.company}</h3>
              <div className="flex flex-col italic mb-2 justify-between md:flex-row">
                <p className="font-semibold mb-1">{item.title}</p>
                <p className="">{item.date}</p>
              </div>
              <div className="flex flex-col gap-1">
                <ul className="list-disc">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
