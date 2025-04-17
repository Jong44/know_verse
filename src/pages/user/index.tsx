import LayoutSidebar from '@/components/custom/layout-sidebar'
import withAuth from '@/middleware/withAuth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const User = () => {
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/auth/login')
        }else{
            router.push('/user/dashboard')
        }
    }, [])
  return (
    <LayoutSidebar>
        <></>
    </LayoutSidebar>
  )
}

export default withAuth(User)