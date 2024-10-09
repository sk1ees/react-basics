import React from "react";
import CardItem from "./CardItem";

const Card = () => {
  const persons = [
    {
      fullName: "Jane Smith",
      profession: "Graphic Designer",
      age: 28,
      imageLink: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    },
    {
      fullName: "Michael Johnson",
      profession: "Software Engineer",
      age: 32,
      imageLink: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    },
    {
      fullName: "Emily Davis",
      profession: "Marketing Specialist",
      age: 26,
      imageLink: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      fullName: "Chris Lee",
      profession: "Data Scientist",
      age: 29,
      imageLink: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      fullName: "Sophia Brown",
      profession: "UX/UI Designer",
      age: 25,
      imageLink: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    },
    {
      fullName: "David Martinez",
      profession: "Product Manager",
      age: 34,
      imageLink: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    },
  ];
  return (
    <>
      <div className="flex gap-5 m-10  flex-wrap">
        {persons.map((item, id) => {
          return (
            <CardItem
              key={id}
              name={item.fullName}
              profession={item.profession}
              age={item.age}
              photo={item.imageLink}
            />
          );
        })}
      </div>
    </>
  );
};

export default Card;
