import React from 'react'
import CheckoutForm from './CheckoutForm'

const ShippingAddress = () => {
    return (
        <div className='pt-10 w-100 d-block'>
            <h2 className='flex-auto text-[18px]'>Shipping address</h2>
            <CheckoutForm />
            
        </div>
    )
}

export default ShippingAddress