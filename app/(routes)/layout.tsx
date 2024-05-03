import Navbar from '@/components/Navbar'
import NavbarBottom from '@/components/NavbarBottom'
import React from 'react'

interface MainLayoutProps{
    children:React.ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>
        <Navbar/>
        <NavbarBottom/>
        <main>
            {children}
        </main>
    </>
  )
}

export default MainLayout