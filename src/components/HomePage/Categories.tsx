import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/filter/slice";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
type CategoriesProps = {
  categoryId: number;
};

const Categories: React.FC<CategoriesProps> = memo(({ categoryId }) => {
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            className={categoryId === i ? "active" : ""}
            onClick={() => dispatch(setCategoryId(i))}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
