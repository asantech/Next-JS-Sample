import Link from "next/link"

import SidebarMenuItem from "./components/SidebarMenuItem"

const sidebarMenuConfig = [
    {
        path: '/hydration',
        subMenus: [
            {
                path: '/multi-components',
                name: 'multi hydration test'
            }
        ]
    }
]

function Sidebar(){

    return (
        <aside>
            <ul>
                {sidebarMenuConfig.map((sidebarMenu, sidebarMenuIndex: number) => {
                    const key = sidebarMenuIndex
                    return (
                        <SidebarMenuItem key={key}>
                            <ul>
                                {sidebarMenu?.subMenus?.map((subMenu, subMenuIndex: number) => {
                                    const key =subMenuIndex
                                    return (
                                         <SidebarMenuItem key={key}>
                                            <Link href={sidebarMenu.path + subMenu.path}>
                                                {subMenu.name}
                                            </Link>
                                         </SidebarMenuItem>
                                    )
                                })}
                            </ul>
                        </SidebarMenuItem>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar