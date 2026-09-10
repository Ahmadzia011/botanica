import React from 'react'
import NavBar from '../components/Navbar'
import { Footer } from '../components/Footer'
import Homepage from './home-page/page'

export default function Page() {
  return (
    <div>
      <NavBar/>
      <Homepage/>
      <Footer/>
    </div>
  )
}
