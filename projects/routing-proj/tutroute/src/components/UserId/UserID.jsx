import React from 'react'
import { useParams } from 'react-router-dom'
const UserID = () => {
    const {idUser} = useParams()
  return (
    <>
   { console.log(idUser)}
    <div className="text-3xl bg-slate-400 p-4 text-white">Welcome to the world ! {idUser}</div>
    </>
  )
}

export default UserID
