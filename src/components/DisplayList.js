import React from "react";
import DisplayItem from "./DisplayItem";

//TODO: find a way to create a unique key.

const DisplayList = ({ restaurants }) => {
  return (
    <div className="ui link cards">
      {restaurants.map(restaurant => {
        const {
          delivery_price,
          description,
          image,
          name,
          tags,
          id
        } = restaurant;
        return (
          <DisplayItem
            key={id}
            delivery_price={delivery_price}
            description={description}
            image={image}
            name={name}
            tags={tags}
          />
        );
      })}
    </div>
  );
};

export default DisplayList;
