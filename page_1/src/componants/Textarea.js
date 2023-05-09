import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

export default function Textarea(props) {
    const style = {
        backgroundColor : props.mode === 'light' ? '#2f4b74' : 'white',
        color : props.mode === 'light' ? 'white' : 'black'
    }
    const [text, settext] = useState("");

    const up = () => {
        console.log("b1 is clicked");
        settext(text.toUpperCase());
    }
    const down = () => {
        console.log("b2 is clicked");
        settext(text.toLocaleLowerCase());
    }
    const clear = () => {
        console.log("b3 is clicked");
        settext("");
    }
    const change = (event)=> {
        settext(event.target.value);
    }

    return (
        <>
            <h2 style={{color : props.mode === 'light'?'black':'white'}}>{props.title}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={style} onChange={change} value={text} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-info" onClick={up}>Convert To UpperCase</button>
            <button type="button" className="btn btn-info mx-2" onClick={down}>Convert To LowerCase</button>
            <button type="button" className="btn btn-info" onClick={clear}>Clear</button>
            <div className='container my-4'>
            <h3 style={{color : props.mode === 'light'?'black':'white'}}>Your Text Summary</h3>
            <p style={{color : props.mode === 'light'?'black':'white'}}>{text.split(" ").length} Words and {text.length} Characters</p>
            <p style={{color : props.mode === 'light'?'black':'white'}}>Reading Speed : {0.008*text.split("").length} Minutes</p>
            <h3 style={{color : props.mode === 'light'?'black':'white'}}>Preview</h3>
            <pre style={{color : props.mode === 'light'?'black':'white'}}>{text.length>0?text:"Enter something to preview here"}</pre>
            </div>
        </>
    )
}

Textarea.propTypes ={
    title : PropTypes.string.isRequired
}
Textarea.defaultProps ={
    title : 'Set title'
}
