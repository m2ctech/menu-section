import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

//css
import classes from "./App.module.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = React.useState(items);
  const [categories, setCategories] = React.useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <div className={classes.head}>
          <h2>Our Menu</h2>
          <div className={classes.underline}></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
