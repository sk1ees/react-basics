import React from "react";
import "./movieStyle.css";

const movieCard = ({ movieData }) => {
  return (
    <>
      <div className="root">
        {movieData.map((item) => {
          console.log(item.image)
          return (
            <div className="container">
              <div className="container-content">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="tags_container">
              
                  <p>{item["category"][0]}</p>
                  <p>{item["category"][1]}</p>
                  <p>{item["category"][2]}</p>
                  <p>{item["category"][3]}</p>
                 
                  
                </div>
                <div className="img-container">
                <img src={item.image} alt="img" srcset="" width={350} height={200}/>
                <div className="card-footer">

                  <button>Watch Now</button>
                  <h3><span>⭐</span>{item.rating}</h3>
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default movieCard;
