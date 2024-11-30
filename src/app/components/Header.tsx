import Link from "next/link"


export default function Header () {
    return (
        <div className= "w-full h-16 bg-gray-800 flex items-center">
            <p className = "font-bold text-lg font-sans ml-20 text-orange-300">Muhammad Faraz</p>
            <ul className = "flex ml-auto mr-80 gap-12">
                <Link href = {"/"}><li className = "text-orange-300 font-sans hover:text-red-400 transition duration-300 hover:text-shadow">Home</li></Link>
                <Link href = {"/projects"}><li className = "text-orange-300 font-sans hover:text-red-400 transition duration-300 hover:text-shadow">Projects</li></Link>
                <Link href = {"/about"}><li className = "text-orange-300 font-sans hover:text-red-400 transition duration-300 hover:text-shadow">About</li></Link>                
                <Link href = {"/contact"}><li className = "text-orange-300 font-sans hover:text-red-400 transition duration-300 hover:text-shadow">Contact</li></Link>
            </ul>

        </div>
    )
}