import React from 'react'
import './calculator.css'
const Theme = () => {
    let body = document.querySelector('body')


    const change1 = () => {
        if (body.className !== "first") {
            body.className = "first"
        }
    }

    const change2 = () => {
        if (body.className !== "second") {
            body.className = "second"

        }
    }

    const change3 = () => {
        if (body.className !== "third") {
            body.className = "third"
        }

    }
    return (
        <div className='header'>
            <h1>calc</h1>
            <div className='div'>
                <div className='theme'>
                    <button className='btn' id='theme1' onClick={change1} ></button>
                    <label className='theme1-label'>1</label>
                    <button className='btn' id='theme2' onClick={change2} ></button>
                    <label className='theme2-label'>2</label>
                    <button className='btn' id='theme3' onClick={change3}></button>
                    <label className='theme3-label'>3</label>
                </div>
            </div>
        </div>
    )
}

export default Theme