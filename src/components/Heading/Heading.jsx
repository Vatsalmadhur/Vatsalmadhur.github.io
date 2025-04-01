import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import "./Heading.css"
export const Heading = (props) => {
    const str = props.title;
    const strArr = str.split(/(?<=.)/u);
    console.log(strArr)


    useEffect(() => {
        gsap.to('.text', {
            y: -200,
            duration: 0.5,
            stagger: 0.1,
            opacity: 1
        })
    }, [])

    return (
        <>
            <div className="outer">
                {strArr.map((item,idx) => (
                    <div key={idx} >{item === " " ? <div className='blankText'></div> : <div className='text'>{item}</div>}
                    </div>
                ))}
            </div>
        </>
    )
}
