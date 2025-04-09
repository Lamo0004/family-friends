"use client";
import Card from "./Card";

const ListClient = ({ data }) => {
  console.log(data);
  return (
    <ul className="flex flex-wrap gap-3 my-4">
      {data.animals.map((animal) => (
        <Card key={animal.id} animal={animal}></Card>
      ))}
    </ul>
  );
};

export default ListClient;
