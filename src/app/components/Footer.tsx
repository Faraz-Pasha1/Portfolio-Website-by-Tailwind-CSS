import Link from "next/link"

export default function Footer () {
    return (
        <div className = "w-[100%] h-[400px] bg-[#2b2a2a] mt-[2200px]">
            <div className = "p-[50px]">
                <p className = "text-[#ffcdb2] font-sans text-[18px] leading-[40px]"><span className = "font-bold">Address: </span> Shahrah e Faisal, Karachi, Sindh Pakistan</p>
            <p className = "text-[#ffcdb2] font-sans text-[18px] leading-[40px]"><span className = "font-bold">Contact # </span>+923322457913</p>
            </div>

            <div className = "ml-[650px] mt-[-120px] w-[80px]">
            <ul className = "grid gap-[30px] text-[16px] text-[#ffcdb2]">
                <Link href = {"/"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2] ">Home</li></Link>
                <Link href = {"/projects"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">Projects</li></Link>
                <Link href = {"/about"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">About</li></Link>                
                <Link href = {"/contact"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">Contact</li></Link>
            </ul>
            </div>

            <div className = "ml-[1000px] mt-[-183px]">
            <ul className = "grid gap-[30px] text-[16px] text-[#ffcdb2]">
                <Link href = {"/"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">Facebook</li></Link>
                <Link href = {"/projects"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">Instagram</li></Link>
                <Link href = {"/about"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">Whatsapp</li></Link>                
                <Link href = {"/contact"}><li className = "w-[80px] hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">LinkedIn</li></Link>
            </ul>
            </div>

            <div className = "text-center w-[100%] h-[70px] bg-[#1d1d1d] mt-[80px]">
                <p className = "pt-[27px] text-[#ffb4a2]">@ Muhammad Faraz 2024. All Copyright Reserved</p>
            </div>

        </div>
    )
}