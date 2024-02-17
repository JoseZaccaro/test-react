import React from 'react'
import Menu from './../components/Menu';
import Contact from './../components/Contact';
import ShippingAddress from './../components/ShippingAddress';

const Checkout = ({ stepState, emailState }) => {
  return (
    <div className='left-side flex-auto order-lg-0 pt-10 pr-[50px] pb-16' >
      <Menu step={stepState[0]} />
      <Contact emailState={emailState}/>
      <ShippingAddress/>
    </div>
  )
}

export default Checkout