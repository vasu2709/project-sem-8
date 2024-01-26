"use client"

import Link from "next/link"
import style from "./navLinks.module.css"
import { NavLinksType } from "@/utils/types"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import CategoryHover from "@/containers/CategoryHover"

const NavLinks = ({ links }: { links: NavLinksType }) => {
  const pathname = usePathname()

  return (
    <div className={style.navLinks}>
      {links &&
        links.navLinks.map((item, index) => {
          return (
            <>
              <Link
                href={item.url}
                key={item.id}
                className={clsx(`${style.link} group`, {
                  [style.active]: pathname === item.url,
                })}
              >
                <>{item.title}</>
                <>
                  {/* {index === 2 && (
                    <div className="h-fit hidden group-hover:visible  duration-500  w-screen absolute  -translate-x-1/2  top-8 shadow-lg   ">
                      <div className="h-[30px] bg-transparent w-full"></div>
                      <CategoryHover />
                    </div>
                  )} */}
                </>
              </Link>
            </>
          )
        })}
    </div>
    
  )
}

export default NavLinks
