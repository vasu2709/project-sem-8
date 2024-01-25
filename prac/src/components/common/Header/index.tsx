import { navbarData } from "@/lib/constData"
import DesktopNav from "./Desktopnav"
import MobileNav from "./Mobilenav"

type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-white sticky shadow-sm top-0 z-40">
        <DesktopNav data={navbarData} />
      </header>
    </>
  )
}

export default Header
