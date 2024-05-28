import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Nav from './components/Nav'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {

const locomotiveScroll = new LocomotiveScroll();

return (
    <div className='h-screen bg-zinc-900'>
      <Nav />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
