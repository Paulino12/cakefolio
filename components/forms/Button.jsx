import React from 'react'

function Button({
    type,
    btnText,
    handleClick,
    className,
    disabled
}) {
    return (
        <>
            <button onClick={handleClick} type={type} disabled={disabled} className={`font-bold rounded-sm px-3 text-white bg-green-500 hover:bg-green-600 active:bg-green-600 
            focus:outline-none focus:ring focus:ring-green-300 ${className}`}>
                {btnText}
            </button>
        </>
    )
}

export default Button
