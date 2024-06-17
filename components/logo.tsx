import Image from "next/image"
import Link from "next/link"


function Logo() {
  return (
    <Link href="/">
        <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
            <Image src="/logo.svg"
            width={30}
            height={30}
            alt="Logo"
            />
            <p className="text-lg text-neutral-700 pb-1">Samanvay</p>
        </div>
    </Link>
  )
}

export default Logo