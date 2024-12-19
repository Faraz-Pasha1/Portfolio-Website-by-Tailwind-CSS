import Image from "next/image";
import Link from "next/link";


export default function Projects() {
    return (

            <div className="text-center w-[95%] mx-auto pt-8 sm:mt-8">
                <h2 className="text-[#e5989b] text-xl md:text-[54px] pt-4  font-sans font-bold underline tracking-[4px]">
                    MY PROJECTS
                </h2>

                <div className="flex flex-wrap justify-center gap-8 mt-5 pt-6">
                    {/* PROJECT ONE */}
                    <div className="border border-black rounded-[15px] w-[90%] sm:w-[350px] md:w-[400px] overflow-hidden">
                        <Image
                            src="/images/project 1.png"
                            alt="Project One"
                            width={400}
                            height={200}
                            className="rounded-t-[15px]  w-full"
                        />
                        <p className="font-sans sm:text-[12px] md:text-[13px] p-[7px] text-[#ffcdb2] bg-[#2b2a2a]">
                            I have made a project of ATM Machine at user end by using TypeScript. In this project, you see features like Withdrawal, Balance, Transfer, etc.
                        </p>
                        <Link href="https://github.com/Faraz-Pasha1/muhammad-faraz-atm-machine-for-all.git">
                            <button className="w-full bg-[#ffb4a2] py-2 font-semibold hover:bg-[#b5838d] transition duration-300">
                                Click Me for link...
                            </button>
                        </Link>
                    </div>

                    {/* PROJECT TWO */}
                    <div className="border border-black rounded-[15px] w-[90%] sm:w-[350px] md:w-[400px] overflow-hidden">
                        <Image
                            src="/images/project 2.png"
                            alt="Project Two"
                            width={400}
                            height={200}
                            className="rounded-t-[15px] w-full"
                        />
                        <p className="font-sans text-[13px] p-[7px] text-[#ffcdb2] bg-[#2b2a2a]">
                            I developed a Number Guessing Game using TypeScript with features that allow users to guess and win based on set logic. Enjoy it.
                        </p>
                        <Link href="https://github.com/Faraz-Pasha1/Faraz-Number-Guessing-Game.git">
                            <button className="w-full bg-[#ffb4a2] py-2 font-semibold hover:bg-[#b5838d] transition duration-300">
                                Click Me for link...
                            </button>
                        </Link>
                    </div>

                    <div className="border border-black rounded-[15px] w-[90%] sm:w-[350px] md:w-[400px] overflow-hidden">
                        <Image
                            src="/images/project 3.png"
                            alt="Project Three"
                            width={400}
                            height={200}
                            className="rounded-t-[15px] w-full"
                        />
                        <p className="font-sans text-[13px] p-[7px] text-[#ffcdb2] bg-[#2b2a2a]">
                        I have developed an application named Currency Exchange by using typescript programming. In which, users can easily be convert thier amount in any currency rate.
                        </p>
                        <Link href="https://github.com/Faraz-Pasha1/Faraz-Currency-Exchange-Center.git">
                            <button className="w-full bg-[#ffb4a2] py-2 font-semibold hover:bg-[#b5838d] transition duration-300">
                                Click Me for link...
                            </button>
                        </Link>
                    </div>

                    <div className="border border-black rounded-[15px] w-[90%] sm:w-[350px] md:w-[400px] overflow-hidden">
                        <Image
                            src="/images/project 4.png"
                            alt="Project Four"
                            width={440}
                            height={240}
                            className="rounded-t-[15px] w-full"
                        />
                        <p className="font-sans text-[13px] p-[7px] text-[#ffcdb2] bg-[#2b2a2a]">
                        I have developed an application named Word Counter by using typescript programming. In which, users can easily be count the any length of words.
                        </p>
                        <Link href="https://github.com/Faraz-Pasha1/Faraz-Pasha-Word-Counter.git">
                            <button className="w-full bg-[#ffb4a2] py-2 font-semibold hover:bg-[#b5838d] transition duration-300">
                                Click Me for link...
                            </button>
                        </Link>
                    </div>

                    <div className="border border-black rounded-[15px] w-[90%] sm:w-[350px] md:w-[400px] overflow-hidden">
                        <Image
                            src="/images/project 5.png"
                            alt="Project Five"
                            width={400}
                            height={200}
                            className="rounded-t-[15px] w-full"
                        />
                        <p className="font-sans text-[13px] p-[7px] text-[#ffcdb2] bg-[#2b2a2a]">
                        I have developed an application named Resume Builder by using typescript programming. In which, users can easily make a resume very interractive.
                        </p>
                        <Link href="https://github.com/Faraz-Pasha1/Faraz-Pasha-Word-Counter.git">
                            <button className="w-full bg-[#ffb4a2] py-2 font-semibold hover:bg-[#b5838d] transition duration-300">
                                Click Me for link...
                            </button>
                        </Link>
                    </div>

                    
                              
                    
                </div>
            </div>

        
    )
}