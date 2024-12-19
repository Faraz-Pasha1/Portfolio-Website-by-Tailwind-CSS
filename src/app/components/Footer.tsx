import Link from "next/link"

export default function Footer () {
    return (
        <div className="w-full flex flex-wrap sm:flex-col md:flex-row items-center sm:gap-y-10 justify-evenly  bg-[#2b2a2a] sm:h-auto md:h-[300px] mt-6 gap-4 p-4">
    {/* Address Section */}
    <div className="sm:w-full md:w-auto ">
        <p className="text-[#ffcdb2] font-sans  text-[18px] leading-[1.5] text-left">
            <span className="font-bold">Address: </span>Shahrah e Faisal, Karachi, Sindh Pakistan
        </p>
        <p className="text-[#ffcdb2] font-sans text-[18px] leading-[1.5] md:text-left">
            <span className="font-bold">Contact #: </span>+923322457913
        </p>
    </div>

    {/* Navigation Links */}
    <div className="sm:w-full md:w-auto  ">
        <ul className="text-[16px] text-[#ffcdb2] sm:flex-col  ">
            <Link href="/">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    Home
                </li>
            </Link>
            <Link href="/projects">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    Projects
                </li>
            </Link>
            <Link href="/about">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    About
                </li>
            </Link>
            <Link href="/contact">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    Contact
                </li>
            </Link>
        </ul>
    </div>

    {/* Social Media Links */}
    <div className="sm:w-full md:w-auto ">
        <ul className="text-[16px] text-[#ffcdb2] space-y-2 sm:flex-col sm:space-x-4 sm:space-y-0">
            <Link href="/">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    Facebook
                </li>
            </Link>
            <Link href="/projects">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    Instagram
                </li>
            </Link>
            <Link href="/about">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    Whatsapp
                </li>
            </Link>
            <Link href="/contact">
                <li className="w-auto hover:font-bold hover:transition hover:duration-300 hover:text-[#ffb4a2]">
                    LinkedIn
                </li>
            </Link>
        </ul>
    </div>

    
</div>



       
    )
}