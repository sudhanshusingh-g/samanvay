import { ReactNode } from "react"

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
interface ChildrenProps{
    children:ReactNode,
}

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


function layout({children}:ChildrenProps) {
  return (
    <div className={cn("h-full bg-slate-50",textFont.className)}>
        {/* Navbar */}
        <Navbar/>
        <main className="pt-24 pb-20 bg-slate-100">
        {children}
        </main>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default layout;