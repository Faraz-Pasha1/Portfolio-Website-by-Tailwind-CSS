import Image from "next/image"


export default function About () {
    return (
        <main>
            <h5 className="text-[#474749] w-full bg-[#b5838d] mt-10 sm:text-[34px] md:text-[54px] sm:text-wrap font-sans font-bold text-center underline tracking-[4px]">
                About Me
            </h5>
            <div className="bg-[#b5838d] flex flex-col sm:justify-center sm:items-center md:flex-row md:justify-evenly items-center py-8">
                <div className="sm:w-full md:w-[80%] px-2 sm:text-center md:text-left">
                    <p className="sm:text-[20px] md:text-[28px] p-[8px] text-[#2b2a2a]">
                        I am a Front End Developer and solve your problem in web applications by using 
                        Typescript, HTML, CSS, NextJS, Tailwind. I also use AI tools for interactive designing. 
                        I have expert-level experience and you can work with me because I provide quality work 
                        with satisfaction and offer guidance for your web applications. 
                    </p>
                </div>
                <div className="md:w-[40%] sm:w-full flex justify-center md:justify-end md:mr-10 mt-4 md:mt-0">
                    <Image 
                        className="rounded-lg" 
                        src="/images/aboutimage.png" 
                        alt="AboutImage" 
                        width={400} 
                        height={400} 
                    />
                </div>
            </div>
        </main>

    )
}