import Image from "next/image"
import TailwindLogo from "../../../public/Tailwind_CSS_Logo.png"

export default function Navbar() {
    return (
        <header className="text-blue-100">
            <nav className="fixed w-full flex flex-column flex-wrap gap-4 justify-around items-center bg-blue-950 pt-5 pb-5 shadow-md md:flex-row">
                <div className="flex items-center gap-1.5">
                    <Image className="h-5 w-9 object-contain" src={TailwindLogo} alt="Tailwind"></Image>
                    <h1 className="text-xl font-bold">tailwindcss</h1>
                </div> 
                <ul className='flex gap-7 lg:gap-16'>
                    <li><a href="#setup">Setup</a></li>
                    <li><a href="#utility">Utility</a></li>
                    <li><a href="#layout">Layout</a></li>
                    <li><a href="#responsive">Responsive</a></li>
                </ul>
            </nav>
        </header>
    )
}