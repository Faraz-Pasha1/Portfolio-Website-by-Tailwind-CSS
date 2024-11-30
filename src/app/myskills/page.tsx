import Image from "next/image"

export default function Myskills () {
    return (
        <div className="w-[92%] h-[580px] bg-[#e5989b] rounded-lg ml-[50px] mt-[38px] p-5">
            <div>
                <h1 className="text-[#2b2a2a] text-[54px] font-sans font-bold text-center underline tracking-[4px]">MY SKILLS & EXPERTISE</h1>
            </div>
            <br/>

            <div className = "border-2 border-black w-[340px] h-[400px] ml-[30px] mt-[10px] bg-[#2b2a2a]">
                <div className="w-[300px] h-[100px] p-4 ml-[15px]"> <Image src = "/images/HTML_CSS.png" alt = "firstskillimage" width= {320} height = {160}/></div>
                <p className = "text-[#ffcdb2] ml-[20px] mt-[100px] flex justify-center">
                    Proficient in crafting clean, responsive, and user-friendly web designs using modern HTML and CSS 
                    techniques. Experienced in creating semantic structures, implementing animations, and ensuring 
                    cross-browser compatibility to deliver visually appealing and functional interfaces.
                </p>
            </div>

            <div className = "border-2 border-black w-[340px] h-[400px] ml-[440px] -mt-[400px] bg-[#2b2a2a]">
            <div className="w-[300px] h-[100px] p-4 ml-[15px]"> <Image src = "/images/NextJS TailwindCSS.png" alt = "secondskillimage" width= {320} height = {160}/></div>
                <p className = "text-[#ffcdb2] ml-[20px] mt-[100px] flex justify-center">
                Skilled in building high-performance, scalable web applications using Next.js and Tailwind CSS. 
                Proficient in creating responsive, SEO-friendly, and visually appealing designs with efficient,
                 reusable components and modern development practices.
                </p>
            </div>

            <div className = "border-2 border-black w-[340px] h-[400px] ml-[850px] -mt-[400px] bg-[#2b2a2a]">
            <div className="w-[300px] h-[100px] p-4 ml-[60px]"> <Image src = "/images/typescript.png" alt = "thirdskillimage" width= {170} height = {50}/></div>
                <p className = "text-[#ffcdb2] ml-[20px] mt-[100px] flex justify-center">
                    Proficient in crafting clean, responsive, and user-friendly web designs using modern HTML and CSS 
                    techniques. Experienced in creating semantic structures, implementing animations, and ensuring 
                    cross-browser compatibility to deliver visually appealing and functional interfaces.
                </p>
            </div>
            <br/>
        </div> 
    )
}