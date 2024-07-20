import React, { useState, useRef, useCallback } from 'react'

const TextForm = (props) => {
    const textToggle = props.mode == "light" ? "black" : "light"
    const bgBtnToggle = props.mode == "light" ? "primary" : "secondary"
    const [text, setText] = useState("");
    // text = "enter here" // wrong way to change the state
    // setText("Text Below...")
    const alertShow = (textAlert) => {
        text == "" ? props.showAlert(`❌ Please provide the text to perform the actions!`, "warning") : props.showAlert(`  ${textAlert}`, "success")

    }

    const handleUpClick = () => {
        setText(text.toUpperCase());
        alertShow("✅ Changed to UPPERCASE!");

    }
    const handleCopy = () => {
        copyPassword()
    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        alertShow("✅ Changed to lowercase!");
    }
    const handleClearText = () => {
        setText("")
        alertShow("Cleared all the text!");
    }
    const handleOnClick = (e) => {
        console.log("changes were measured!")
        setText(e.target.value)
    }

    const handleSpaces = () => {
        let textSpaces = text.split(/[  ]+/)
        setText(textSpaces.join(" "))
        alertShow('✅ Removed the unecessary spaces!')
    }
    const refText = useRef(null);

    const copyPassword = useCallback(() => {
        refText.current?.select()
        window.navigator.clipboard.writeText(text)
        alertShow('✅ Copied to Clipboard!')
    })
    // correct way to change the state
    return (
        <>

            <div className="container mt-5">

                <div className="mb-3">
                    <div className={`h1 my-4 text-${textToggle}`}>TextUtils Generator</div>
                    <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${textToggle}`}>{props.heading}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnClick} rows="6" style={{ width: "55vw" }} ref={refText}></textarea>
                    <button type="button" className={`btn btn-${bgBtnToggle} mt-4 me-4`} onClick={handleUpClick}>Convert to Uppercase</button>
                    <button type="button" className={`btn btn-${bgBtnToggle} mt-4 me-4`} onClick={handleLowClick}>Convert to Lowercase</button>
                    <button type="button" className={`btn btn-${bgBtnToggle} mt-4 me-4`} onClick={handleCopy}>Copy to ClipBoard</button>
                    <button type="button" className={`btn btn-${bgBtnToggle} mt-4 me-4`} onClick={handleClearText}>Clear Text</button>
                    <button type="button" className={`btn btn-${bgBtnToggle} mt-4 me-4`} onClick={handleSpaces}>Clear Extra Spaces</button>
                </div></div>
            <div className="container">
                <h3 className={`text-${textToggle}`}>Summary</h3>
                <div className="d-flex gap-2 mt-4">
                    <p className={`text-${textToggle}`}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words </p>
                    <p className={`text-${textToggle}`}>{text.length} characters </p>

                </div>
                <p className={`text-${textToggle}`}>{0.008 * (text.split(' ').length - 1)} Minutes needed for this! </p>
                <h3 className={`text-${textToggle}`}>Preview</h3>
                <p className={`text-${textToggle}`}>{text === "" ? "provide me some text for preview!" : text}</p>
            </div>
        </>
    )
}

export default TextForm
