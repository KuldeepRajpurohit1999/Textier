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
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control mb-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                        <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className='btn btn-primary ms-3' onClick={handleLowClick}>Convert to Lowercase</button>
                        <button className='btn btn-primary ms-3' onClick={ClearText}>Clear Text</button>
                        <button className='btn btn-primary ms-3' onClick={handleCopy}>Copy Text</button>
                        <button className='btn btn-primary ms-3' onClick={handleExtraSpaces}>Remove Spaces</button>
                    </div>
                </div>
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.trim() === ''? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g,'').length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text :"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
