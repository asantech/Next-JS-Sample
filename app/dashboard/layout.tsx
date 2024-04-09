import Header from "@/components/layout/header/Header"
import Sidebar from "@/components/layout/sidebar/Sidebar"
import Footer from "@/components/layout/footer/Footer"


export default function DashboardLayout({
  children, 
}: {
  children: Readonly<React.ReactNode>
}) {
  return (
    <>
        <Header/>
        <div>
            <Sidebar/>
            <main>
                {children}
            </main>
        </div>
        <Footer/>
    </>
  )
}