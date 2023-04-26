import React, { useEffect, useState } from 'react'
import rgbToHex from './utils'
const SingleColor = (props) => {
    const  [alert, setAlert] = useState(false);
    const bcg  = props.rgb.join(',')
    // const hex = rgbToHex(...props.rgb)
    console.log(props.hexColor);
    const hexValue = `#${props.hexColor}`

    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setAlert(false)
        },3000)    
        return () =>{
            clearTimeout(timeOut)
        }
    },[alert])
    return (
    <article 
    onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
    }}
    className={`color ${props.index > 9 ? 'color-light' : ''}`}
    style={{backgroundColor:`rgb(${bcg})`}}
    >
    <p className="percent-value">
        {props.weight}%
    </p>
    <p className="color-value">{hexValue}</p>
        {alert ? <p className='alert'>Copy to Clipboard</p> : ''}
        
    </article>
    )
}

export default SingleColor
