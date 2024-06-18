import React from 'react'
import Navbar from './_components/navbar'

function DasboardLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-full'>
        <Navbar/>
        {children}
    </div>
  )
}

export default DasboardLayout