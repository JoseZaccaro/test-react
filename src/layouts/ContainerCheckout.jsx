import React from 'react'
import Invoice from '../components/Invoice';

const ContainerCheckout = ({children}) => {
  return (
    <div className='container max-w-[1000px]  flex'>
        {children}
        <Invoice/>
    </div>
  )
}

export default ContainerCheckout