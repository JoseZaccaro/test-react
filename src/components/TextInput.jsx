import React from 'react'

const TextInput = ({value, onInput, name, type = "text", id, placeholder = ""}) => {
    return (
        <input type={type} id={id} className="text-[14px] border-1 border-[#a9a9a9]  py-[13px] px-[20px] rounded-[5px] outline-none w-100 focus:border-black" placeholder={placeholder} name={name} value={value} onInput={onInput} />
    )
}

export default TextInput