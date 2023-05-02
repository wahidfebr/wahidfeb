export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-start items-start pt-14 mx-80 w-1/4 gap-4">
                <h1 className="text-3xl font-medium">
                    <span className="animate-bounce">👋</span> Hi There!
                    I&apos;m
                </h1>
                <h1 className="text-8xl font-extrabold">Wahid Febrilianto</h1>
                <h1 className="text-2xl">
                    A fullstack javascript developer from{" "}
                    <span className="text-red-600">Indonesia</span>
                </h1>
            </div>
        </>
    );
}
