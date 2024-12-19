import Link from "next/link";
import Image from "next/image";
import Myskills from "../myskills/page";
import Projects from "../projects/page";
import About from "../about/page";
import Contact from "../contact/page";

export default function Hero () {
    return (
        <div>
                <div className="bg-[#5d5864] w-full md:h-[620px] sm:h-auto px-4">
                    {/* INTRO DESCRIPTION SECTION */}
                    <div className="text-center">
                        <p className="text-[#d1888a] mx-auto text-center text-[50px] leading-tight tracking-wider font-bold font-sans">
                            FRONT END DEVELOPER
                        </p>

                        <p className="w-full sm:w-[90%] mx-auto text-center sm:text-[14px] md:text-[18px] text-[#1d1d1d] sm:font-medium md:font-semibold leading-relaxed tracking-tight">
                            Welcome to my portfolio! I am a passionate Front-End Developer with expertise in building sleek, responsive, and user-friendly web experiences. With a strong foundation in{" "}
                            <span className="text-[#d1888a]">HTML, CSS, Tailwind, NextJS, TypeScript</span>, I craft visually stunning and performant layouts. 
                            Feel free to explore and get in touch—let's build something amazing together!
                        </p>
                    </div>

                    {/* Call to Action Button */}
                    <div className="w-full mx-auto mt-4 flex justify-center">
                        <Link href="/contact">
                            <button className="bg-[#2b2a2a] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#c9a38e] hover:text-black transition duration-300">
                                Get in Touch!
                            </button>
                        </Link>
                    </div>

                    {/* INTRO IMAGE SECTION */}
                    <div className="pt-6 flex justify-center">
                        <Image
                            src="/images/introImage.png"
                            alt="IntroImage"
                            width={1300}
                            height={300}
                            
                        />
                    </div>

                    
                </div>

        </div>
        
    )
}