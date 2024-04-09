import Navbar from "../navbar/Navbar"
import VercelLogoMark from "./components/logos/VercelLogoMark"
import Separator from "./components/logos/Separator"
import Watermark from "./components/logos/Watermark"

function Header(){

    return (
        <header className="h-16 sticky top-0 z-50 w-full flex justify-around items-center" style={{boxShadow: 'inset 0 -1px 0 0 #eaeaea'}}>
            <div className="flex justify-between items-center gap-x-1">
                <VercelLogoMark className="w-6"/>
                <Separator className="w-8"/>
                <Watermark className="w-24"/>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header