"use client";

import { useState } from "react";
import ListClient from "./ListClient";
import Slider from "./Slider";

const ListWithFilter = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filtered = data.animals.filter((animal) => {
    if (selectedCategory === "Alle") return true;
    if (selectedCategory === "Katte") return animal.type === "Cat";
    if (selectedCategory === "Hunde") return animal.type === "Dog";
    return false;
  });

  return (
    <>
      <Slider onCategorySelect={setSelectedCategory} selectedCategory={selectedCategory} />
      <ListClient data={{ animals: filtered }} />
    </>
  );
};

export default ListWithFilter;
