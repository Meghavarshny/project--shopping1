 import React from "react";
import "./CardList.css";

const CardList = ({ item, removeItem }) => {
  return (
    <div className="card-list-body">
      <img src={item.image} className="card-list-img" alt="" />
      <button
        className="delete-btn"
        onClick={() => {
          document.querySelector(".card-list-body").classList.add("animate");
          setTimeout(() => removeItem(item), 190);
        }}
      >
        ✘
      </button>
      <h4>{item.title}</h4>
      <hr />
      <div className="card-list-add-minu-body">
        <p>Price : ${item.price}</p>
      </div>
    </div>
  );
};

export default CardList;  

