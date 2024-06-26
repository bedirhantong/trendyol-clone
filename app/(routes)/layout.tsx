
import Navbar from '@/components/Navbar/Navbar'
import NavbarBottom from '@/components/Navbar/NavbarBottom'
import NavbarTop from '@/components/Navbar/NavbarTop'
import React from 'react'

interface MainLayoutProps{
    children:React.ReactNode
}

const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>
        <div >
          <NavbarTop/>
          <Navbar/>
          <NavbarBottom/>
        </div>
        <main >
            {children}
        </main>
    </>
  )
}

export default MainLayout