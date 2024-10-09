import React, { Component } from 'react'

const NewsItems = (props) => {

    let { title, description, urlImage, urlRedirect, author } = props;
    return (
        <>
            <div className="card border-info border-2 " style={{ width: "20rem", height: "30rem" }}>
                <img src={urlImage} className="card-img-top" height={200} />
                <div className="card-body bg-dark text-white">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-title ">
                        <a href={urlRedirect} target='_blank' className='text-decoration-none text-white'>

                            Author : <span className='text-info fw-bold'>{author}</span>
                        </a>

                    </p>
                    <p className="card-text">{description}</p>
                    <div className="container w-100 d-flex justify-content-center align-items-center position-absolute bottom-0 mb-4 pe-5">

                        <a href={urlRedirect} target='_blank' className="btn btn-secondary w-50 ">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NewsItems
