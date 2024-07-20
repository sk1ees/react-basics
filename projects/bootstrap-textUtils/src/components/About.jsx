import React, { useState } from 'react'

const About = (props) => {
    const textToggle = props.mode == "light" ? "dark" : "light"
    const bgBtnToggle = props.mode == "light" ? "light" : "dark"
    const bgBodyToggle = props.mode == "light" ? "light" : "black"
    // const [mode, setMode] = useState({
    //     color: "white",
    //     backgroundColor: "black",

    // })

    // const toggleMode = () => {
    //     if (mode.backgroundColor == "black") {
    //         setMode({
    //             color: "black",
    //             backgroundColor: "white",
    //             value: "dark",
    //             transition: "1s ease"
    //         })
    //     }
    //     else {
    //         setMode({
    //             color: "white",
    //             backgroundColor: "black",
    //             value: "light",
    //             transition: "1s ease"
    //         })
    //     }
    // }
    return (
        <>
            <div className="container mt-5 " style={{ width: "50vw" }}>
                <div classNameName="container mt-4 ">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header " >
                                <button className={`accordion-button text-${textToggle} bg-${bgBtnToggle}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className={`accordion-body bg-${bgBodyToggle} text-${textToggle}`}>
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed text-${textToggle} bg-${bgBtnToggle}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className={`accordion-body bg-${bgBodyToggle} text-${textToggle}`} >
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed text-${textToggle} bg-${bgBtnToggle}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse text-dark" data-bs-parent="#accordionExample">
                                <div className={`accordion-body  bg-${bgBodyToggle} text-${textToggle}`} >
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="btn btn-primary mt-4" onClick={toggleMode}>Enable {mode.value} Mode</button> */}

            </div>
        </>
    )
}

export default About
