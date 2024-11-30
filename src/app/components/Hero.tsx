import Link from "next/link";
import Image from "next/image";
import Myskills from "../myskills/page";
import Projects from "../projects/page";
import About from "../about/page";
import Contact from "../contact/page";






export default function Hero () {
    return (
        <div className = "bg-[#5d5864] w-full h-[620px]">
            
            
            {/* INTRO DESCRIPTION SECTION */}

            <div className = "heroTitleDescription">
                <p className = "text-[#d1888a] text-center text-[110px] font-bold font-sans">FRONT END DEVELOPER</p>
                <p className = "w-[87%] text-center ml-[82px] -mt-[20px] text-[18px] text-[#1d1d1d] font-bold">
                Welcome to my portfolio! I'm a passionate Front-End Developer with expertise in building 
                sleek, responsive, and user-friendly web experiences. With a strong foundation in <span className = "text-[#d1888a]">HTML, CSS, 
                Tailwind , NextJS , Typescript.</span> I craft visually stunning and performant layouts
                </p> 
                <p className = "text-center mt-[10px] text-[17px] text-[#1d1d1d] font-bold">
                Feel free to explore and get in touch—lets build something amazing together!
                </p>
                <Link href = {"/contact"}><button className = "bg-[#2b2a2a] text-white px-4 py-1.5 rounded-md transition duration-300 ease-in-out transform ml-[1140px] -mt-10  hover:bg-[#c9a38e] hover:scale-105 hover:text-black">Get in Touch !</button></Link>
            </div>
            
            {/* INTRO IMAGE SECTION */}

            <div className = "flex justify-center">
            <Image src="/images/introImage.png" alt="IntroImage" width={1300} height={300}/>
            </div> <br/>

            <div>
                <Myskills/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Contact/>
            </div>
            
            
        </div>
        
    )
}