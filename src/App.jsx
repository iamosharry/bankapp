import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Users from './components/Users'
import GetStarted from './components/GetStarted'
import Business from './components/Business'
import Transaction from './components/Transaction'
import Card from './components/Card'
import Comments from './components/Comments'
import Clients from './components/Clients'
import Banner from './components/Banner'

import {logo,close,menu,discount,arrowUp,robot,star,shield,send,
  bill,apple,google,card,quotes,people01,people02,people03,airbnb,binance,dropbox,coinbase,instagram,facebook,linkedin,twitter
} from './assets'
import Footer from './components/Footer'

const App = () => {
  const navlist = ['Home','About Us','Features','Solution']
  return (
    <div>
    <div className='md:px-20  w-full my-[0] mx-[auto] bg-black-gradient text-white font-[poppins] overflow-hidden '>
      <Navbar logo={logo} navlist={navlist} menu={menu} close={close}/>
      <Hero discount={discount} arrow={arrowUp} robot={robot}/>
      <GetStarted arrow={arrowUp}/>
      <Users/>
      <Business star={star} shield={shield} send={send}/>
      <Transaction bill={bill} apple={apple} google={google}/>
      <Card card={card} />
      <Comments quotes={quotes} people01={people01} people02={people02} people03={people03}/>
      <Clients airbnb={airbnb} binance={binance} coinbase={coinbase} dropbox={dropbox}/>
      <Banner/>
    </div>
    <Footer logo={logo} twitter={twitter} facebook={facebook} linkedin={linkedin} instagram={instagram}/>

    </div>
  )
}

export default App