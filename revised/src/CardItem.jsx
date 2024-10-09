import React from "react";

const CardItem = (props) => {
  const { name, profession, age, photo } = props;
  return (
    <div className="w-48 h-52 flex flex-col p-3 gap-3 items-center justify-center bg-zinc-100">
      <img src={photo} alt="" className="object-cover w-1/2 h-1/2" width={100} height={100}/>
      <div className="text-xs text-center">
        <h1 className="text-xs">{name}</h1>
        <p className="text-[10px] text-blue-500">
          {profession} , {age}
        </p>
        <button className="px-4 py-2 rounded-lg mt-5 bg-emerald-500">Add Friend</button>
      </div>
    </div>
  );
};

export default CardItem;
