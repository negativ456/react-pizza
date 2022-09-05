import React from "react";
import PizzaItem from "../PizzaItem";
import { IPizzaItem } from "../../../redux/pizza/types";

type PizzaListProps = {
  pizzaList: IPizzaItem[];
};

const PizzaList: React.FC<PizzaListProps> = ({ pizzaList }) => {
  return (
    <>
      {pizzaList.map((pizza) => (
        <PizzaItem key={pizza._id} {...pizza} />
      ))}
    </>
  );
};

export default PizzaList;
