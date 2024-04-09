import { PropsWithChildren } from "react"
import clsx from 'clsx'

type SidebarMenuItemProps = {
    additionalClasses?: string
}

function SidebarMenuItem({
    additionalClasses,
    children
}: PropsWithChildren<SidebarMenuItemProps>){
    return <li className={clsx('',additionalClasses)}>{children}</li>
}

export default SidebarMenuItem