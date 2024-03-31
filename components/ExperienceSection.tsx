"use client"; // this is a client component

const ExperienceSection = () => {
  return (
    <section id="experience" className="">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="mx-auto">
          <div className="p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">
              PT Ragdalion Revolusi Industri
            </h3>
            <p className="mb-1">September 2023 - Present</p>
            <p className="">Backend Developer</p>
          </div>
          <div className="p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">Hacktiv8 Indonesia</h3>
            <p className="mb-1">January 2023 - May 2023</p>
            <p className="">Bootcamp FullStack Javascript Immersive</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
