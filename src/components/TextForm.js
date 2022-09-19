import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log(" Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLowClick = () => {
        console.log(" Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const ClearText = () => {
        console.log(" Text Cleared ");
        let newText = " ";
        setText(newText);
        props.showAlert("Input text cleared!","success");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied Successfully","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode==='dark' ? 'white': '#042743'}}>
                <div>
                    <h2 className='mb-4'>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control mb-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                        <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
                        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={ClearText}>Clear Text</button>
                        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Spaces</button>
                    </div>
                </div>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.trim() === ''? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g,'').length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text :"Nothing to preview!"}</p>
            </div>
        </>
    )
}
