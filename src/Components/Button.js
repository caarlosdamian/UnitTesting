import React, { useState } from 'react'

const Button = () => {
    const [showBotton, setShowBotton] = useState(false)
    return (
        <div>
            <button
            data-testid='button'
            onClick={()=>{
                setShowBotton(true);
            }}
            >Click here</button>
            {
                showBotton &&
                <button data-testid="button">Click here</button>
            }
        </div>
    )
}

export default Button
