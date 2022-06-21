import React from "react";

import classes from "./Menu.module.css";

export default function Menu({ items }) {
  return (
    <div className={classes.section}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className={classes.menuitem}>
            <img src={img} alt={title} className={classes.image} />
            <div className={classes.iteminfo}>
              <header className={classes.header}>
                <h4 className={classes.name}>{title}</h4>
                <h4 className={classes.price}>${price}</h4>
              </header>
              <p className={classes.itemtext}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
