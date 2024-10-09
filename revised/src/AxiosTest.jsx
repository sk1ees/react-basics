import axios from "axios";
import React, { useContext, useState } from "react";
import { DataContext } from "./context/UserContext";

const AxiosTest = () => {
  const userData = useContext(DataContext);
  const [data, setData] = useState([]);
  const getAxiosData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(data);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 ">
        <div className="w-full p-32 ">
          <h1 className="text-5xl text-white p-3 text-center">
            Welcome {userData.userName}!
          </h1>
          <button
            onClick={getAxiosData}
            className="px-5 py-2 bg-blue-500  rounded-lg active:scale-95"
          >
            Get the data
          </button>
          {data.map((item, id) => {
            return (
              <div key={id} className="w-full p-5 bg-zinc-800 mt-12 rounded-lg">
                <img src={item.download_url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AxiosTest;
