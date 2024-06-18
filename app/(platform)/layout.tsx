import {ClerkProvider} from "@clerk/nextjs";
function PlatforLayout({children}:{children:React.ReactNode}) {

  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  )
}

export default PlatforLayout