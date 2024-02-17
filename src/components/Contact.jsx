import React from 'react'
import TextInput from './TextInput';

const Contact = ({ emailState }) => {
    const [email, setEmail] = emailState;
    const handleInputText = (e) => {
        e.preventDefault()
        const name = e.target.name
        setEmail({
            ...email,
            [name]: e.target.value
        })


    }
    const handleInputCheckbox = (e) => {
        e.preventDefault()
        const name = e.target.name

        setEmail({
            ...email,
            [name]: e.target.checked
        })
    }

    console.log(email);

    // TODO: ADD VALIDATION

    return (
        <div className='pt-4 w-100 d-flex flex-wrap justify-content-between text-[18px]'>
            Contact

            <div className="pt-3 w-100 d-block">
                <TextInput onInput={handleInputText} value={email.email} name='email' id="email" type='email' placeholder="Email"/>
                <div className="form-check checkbox-row w-100 d-block">
                    <label className="form-check-label text-[14px]" htmlFor="notifications">
                        <input className="form-check-input shadow-none checked:bg-black checked:border-black" type="checkbox" onInput={handleInputCheckbox} name='notifications' defaultChecked={email.notifications} id="notifications" />
                        Email me with news and offers
                    </label>
                </div>


            </div>
        </div>
    )
}

export default Contact