import Image from "next/image"

export default function Myskills () {
    return (

        <div className="w-[95%] bg-[#e5989b] rounded-lg mt-4 md:h-[500px] mx-auto">
            <div>
                <h1 className="text-[#2b2a2a] text-center underline tracking-[4px] sm:text-[28px] md:text-[54px] font-sans font-bold">
                MY SKILLS & EXPERTISE
                </h1>
            </div>

            <div className="flex flex-wrap gap-12 justify-center items-center mt-5">
                {/* Skill 1 */}
                <div className="w-[300px] md:w-[340px] h-[380px] border-2 border-black bg-[#2b2a2a] rounded-lg overflow-hidden">
                <Image
                    src="/images/HTML_CSS.png"
                    alt="HTML & CSS Skill"
                    className="w-full h-[160px] object-cover"
                    width={320}
                    height={160}
                />
                <p className="text-[#ffcdb2] pt-4 px-4 text-center">
                    Proficient in crafting clean, responsive, and user-friendly web designs using modern HTML and CSS techniques.
                    Experienced in creating semantic structures, implementing animations, and ensuring cross-browser compatibility
                    to deliver visually appealing and functional interfaces.
                </p>
                </div>

                {/* Skill 2 */}
                <div className="w-[300px] md:w-[340px] h-[380px] border-2 border-black bg-[#2b2a2a] rounded-lg overflow-hidden">
                <Image
                    src="/images/NextJS TailwindCSS.png"
                    alt="Next.js & Tailwind CSS Skill"
                    className="w-full h-[160px] object-cover"
                    width={360}
                    height={160}
                />
                <p className="text-[#ffcdb2] pt-4 px-4 text-center">
                    Proficient in creating scalable and efficient web applications with Next.js and Tailwind CSS. Skilled in
                    designing modern, responsive layouts, optimizing performance, and implementing reusable components for seamless
                    user experiences.
                </p>
                </div>

                {/* Skill 3 */}
                <div className="w-[300px] mb-2 md:w-[340px] h-[380px] border-2 border-black bg-[#2b2a2a] rounded-lg overflow-hidden">
                <Image
                    src="/images/typescript.png"
                    alt="TypeScript Skill"
                    className="w-[150px] h-[160px] items-center object-cover"
                    width={150}
                    height={60}
                />
                <p className="text-[#ffcdb2] pt-4 px-4 text-center">
                    Skilled in utilizing TypeScript to write clean, maintainable, and scalable code. Proficient in type-safe
                    development, enhancing code quality, and integrating TypeScript seamlessly with modern frameworks like React and
                    Next.js.
                </p>
                </div>
            </div>
            </div>

        
    )
}