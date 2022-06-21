import React from "react";
import classes from "./Categories.module.css";

export default function Categories(props) {
  const { categories, filterItems } = props;
  return (
    <div className={classes.btncontainer}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className={classes.filterbtn}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
