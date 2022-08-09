import React from 'react'

function Textarea({
    className,
    placeholder,
    value,
    handleTextArea
}) {
    return (
        <div>
            <textarea
            maxLength={250}
            className={`
                resize-none
                mb-2
                block
                w-full
                px-3
                py-1.5
                font-normal
                text-gray-700
                bg-black bg-clip-padding
                border border-gray-500
                rounded-sm
                transition
                ease-in-out
                m-0
                focus:outline-none 
                focus:ring-1 focus:ring-green-500 focus:border-0
                ${className}`}
            rows="5"
            placeholder={placeholder}
            required
            value={value}
            onChange={handleTextArea}
            >
            </textarea>
        </div>
    )
}

export default Textarea
