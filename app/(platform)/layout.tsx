import {ClerkProvider} from "@clerk/nextjs";
import {Toaster} from "sonner";
function PlatforLayout({children}:{children:React.ReactNode}) {

  return (
    <ClerkProvider>
      <Toaster/>
        {children}
    </ClerkProvider>
  )
}

export default PlatforLayout