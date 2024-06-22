import { OrganizationProfile } from '@clerk/nextjs'
import React from 'react'

function Settings() {
  return (
    <div className='w-full'>
        <OrganizationProfile
        appearance={{
            elements:{
                rootBox:{
                    boxShadow:"none",
                    width:"100%"
                },
                card:{
                    border:"1px solid #e5e5e5",
                    width:"100%",
                    boxShadow:"none"
                }
            }
        }}
        />
    </div>
  )
}

export default Settings