import Image from "next/image"


export default function About () {
    return (
        <div className = "mt-[50px] h-[450px] bg-[#b5838d]">
            <h5 className = "text-[#474749] text-[54px] font-sans font-bold text-center underline tracking-[4px]">About Me</h5>
            <p className = "w-[50%] text-[28px] p-[20px]">
                I am a Front End Developer and solve your problem in web applications by using 
                Typescript , HTML , CSS , NextJS , Tailwind. Also use some AI tools for interractive desinging. 
                I have a an experience of expert level and you can work with me because i give quality work with 
                satsification and also give guidance for your web applications. 
            </p>

            <Image className = "ml-[760px] mt-[-320px]" src="/images/aboutimage.png" alt="AboutImage" width={550} height={400}/>
        </div>
    )
}