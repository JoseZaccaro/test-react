import React from 'react'

const Menu = ({ step }) => {
    return (
        <header>
            <div className="max-h-[34px] pt-6 w-100 d-none d-lg-block">
                <img src="/images/logo-blue.png" className='h-[34px]' alt="logo" />
            </div>
            <div className="w-100 d-none d-lg-block pt-5">
                <ul className='list-none flex items-center text-[12px]'>
                    <li className={`pr-5 ${step === 0 ? 'opacity-active' : ''}`}>Shipping </li>
                    {
                        step === 1 &&
                        (<>
                            <img src="/images/right-arrow.jpg" className='h-[10px] object-contain' alt="arrow-right" />
                            <li className='pl-[10px] opacity-active'>Payment</li>
                        </>)
                    }
                </ul>
            </div>
        </header>
    )
}

export default Menu