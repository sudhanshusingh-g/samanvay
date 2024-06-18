import { OrganizationSwitcher } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

function OrganizationIdPage() {
    const {userId,orgId}=auth();
  return (
    <div>
        <OrganizationSwitcher/>
    </div>
  )
}

export default OrganizationIdPage