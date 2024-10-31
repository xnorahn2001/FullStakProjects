// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = () => {
  return (
<div>
      <div>
        <header>
          <Navbar />
        </header>
        <main><Outlet /></main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
