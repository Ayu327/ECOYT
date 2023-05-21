import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'


const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <h1>Layout</h1>
      <main>    {children}</main>
  
    <Footer/>
    </div>
  )
}

export default Layout
