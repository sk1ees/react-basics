import axios from "axios";
import React, { useContext, useState } from "react";
import { DataContext } from "./context/UserContext";

const AxiosTest = () => {
  const userData = useContext(DataContext);
  const [buttonText, setButtonText] = useState("Fetch the data!");
  const [data, setData] = useState([]);
  const getAxiosData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    setButtonText("Data Scraped Succesfully!");
    console.log(data);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 ">
        <div className="w-full p-32 ">
          <h1 className="text-5xl text-white p-3 text-center">
            Welcome {userData.userName}!
          </h1>
          <div className="w-full text-center py-5 ">
            <button
              onClick={getAxiosData}
              className="px-5 py-2 bg-blue-500 text-center hover:bg-red-500 transition-all  rounded-lg active:scale-95"
            >
              {buttonText}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-5 p-5 bg-zinc-800 mt-12 rounded-lg">
            {data.map((item, id) => {
              return (
                <img
                  key={id}
                  src={item.download_url}
                  alt=""
                  className="w-full"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosTest;
