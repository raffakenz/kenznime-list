import Link from "next/link"
import InputSearch from "./InputSearch"
import LogButton from "./LogButton"

const NavBar = () => {
    return (
        <header className="bg-color-biru"> 
            <div className="flex md:flex-row flex-col justify-between p-5 gap-2 items-center">
                <Link href="/" className="font-extrabold text-6xl text-white">ANIME LIST</Link>
                <InputSearch />
                <LogButton></LogButton>
            </div>
        </header>
    )
}

export default NavBar