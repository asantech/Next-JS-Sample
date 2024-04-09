import { PropsWithChildren } from "react"

import SidebarMenuItem from "./SidebarMenuItem"

function SidebarMenuList({children , menuConfig}: PropsWithChildren<any>){
    return (
        <ul>
            {menuConfig?.map((menuItemConfig: any, menuItemIndex: number) => {
                const key = menuItemIndex
                return (
                    <SidebarMenuItem key={key}>{children}</SidebarMenuItem> 
                )
            })}
        </ul>
    )
}

 
export default SidebarMenuList