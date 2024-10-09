import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data , setData] = useState([]);
useEffect(()=>{
    fetch('https://api.github.com/users/sk1ees')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setData(data);
    })
} , [])
    return (
    <>
    .
     <div className="text-3xl bg-black p-4 text-white">Your Github Followers {data.followers}

     <img src={data.avatar_url} alt="" srcset=""  width={300}/>
     </div>
    </>
  )
}

export default Github
