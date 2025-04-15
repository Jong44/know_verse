import LayoutSidebar from '@/components/custom/layout-sidebar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const User = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/user/dashboard')
    }, [])
  return (
    <LayoutSidebar>
        <></>
    </LayoutSidebar>
  )
}

export default User