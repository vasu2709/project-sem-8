import Link from "next/link"
import { UrlObject } from "url"
import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
  url?: string | UrlObject
}

function CategoryHoverNavLink({ children, url }: Props) {
  return (
    <div className="text-grayDark-50 hover:text-greenDark-50 mb-2">
      {url && <Link href={url}>{children}</Link>}
    </div>
  )
}

export default CategoryHoverNavLink
