import { ReactNode } from "react"

interface ChildrenProps{
    children:ReactNode,
}

function layout({children}:ChildrenProps) {
  return (
    <div className="h-full bg-slate-50">
        {/* Navbar */}
        <main className="pt-40 pb-20 bg-slate-100">
        {children}
        </main>
        {/* Footer */}
    </div>
  )
}

export default layout