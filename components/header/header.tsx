import Link from "next/link"
import ToggleBtn from "../toggleButton/toggleBtn"

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">강찬수의 포트폴리오</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/about" className="mr-5 hover:text-gray-900">
                        About
                    </Link>
                    <Link href="/skills" className="mr-5 hover:text-gray-900">
                        Skills
                    </Link>
                    <Link href="/projects" className="mr-5 hover:text-gray-900">
                        Project
                    </Link>
                </nav>
                <ToggleBtn />
            </div>
        </header>
    )
}

export default Header