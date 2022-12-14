import React from 'react'

function Label({
    labelFor,
    className,
    text
}) {
    return (
        <>
            <label htmlFor={labelFor} className={`inline-block text-gray-900 font-medium ${className}`}>{text}</label>
        </>
    )
}

export default Label
