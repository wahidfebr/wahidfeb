export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-start items-start pt-14 mx-80 gap-80">
                <div className="flex flex-col gap-4 w-2/5">
                    <h1 className="text-3xl font-medium">
                        <span className="animate-bounce">👋</span> Hi There!
                        I&apos;m
                    </h1>
                    <h1 className="text-8xl font-extrabold">
                        Wahid Febrilianto
                    </h1>
                    <h1 className="text-2xl">
                        A fullstack javascript developer from{" "}
                        <span className="text-red-600">Indonesia</span>
                    </h1>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-3xl font-medium">
                        A brief introduction
                    </h1>
                    <h1 className="text-8xl font-extrabold">about me</h1>
                    <div className="text-lg leading-7 w-2/5">
                        <p>
                            I&apos;m Wahid, from{" "}
                            <span className="text-red-600">Indonesia</span>. I
                            have always been enthusiastic about seizing any
                            opportunity that comes my way to enhance my skills
                            and knowledge in various fields, such as{" "}
                            <span className="font-semibold">Programming</span>,{" "}
                            <span className="font-semibold">
                                Computer Repairment Service
                            </span>
                            , and more.
                            <br />
                            <br />I am particularly interested in developing
                            innovative web technologies and products. My passion
                            for web development drives me to explore new ideas
                            and push the boundaries of what&apos;s possible in
                            this exciting field.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
