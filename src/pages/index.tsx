import { useRouter } from 'next/router'
import React, { use, useEffect } from 'react'

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/user/dashboard')
  }, [])
  return (
    <>
    </>
  )
}

export default Home