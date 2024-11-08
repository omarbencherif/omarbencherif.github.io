import React from "react";
import "./ItemList.css";

function ItemList({
  items,
  addToShoppingList,
  shoppingList,
  removeFromShoppingList,
  removeAllFromShoppingList,
}) {
  const getItemCount = (item) =>
    shoppingList.filter((shoppingItem) => shoppingItem.name === item.name)
      .length;

  return (
    <div className="item-list-container">
      {shoppingList.length > 0 && (
        <button
          onClick={removeAllFromShoppingList}
          className="remove-all-button"
        >
          Remove All
        </button>
      )}

      <div className="item-grid">
        {items.map((item, index) => {
          const count = getItemCount(item);
          return (
            <div key={index} className="item-card">
              <img
                src={item.image} // Use the image from the items array
                alt={item.name} // Use the item's name as alt text
                className="item-image"
              />
              <div className="item-info">
                <span>
                  {item.name}{" "}
                  {count > 0 && (
                    <span style={{ color: "yellow" }}>(x{count})</span>
                  )}{" "}
                  - £{item.price.toLocaleString()}
                </span>
              </div>
              <div className="button-container">
                <button
                  onClick={() => addToShoppingList(item)}
                  className={`add-button ${count > 0 ? "added" : ""}`}
                >
                  {count > 0 ? "Added" : "Add to List"}
                </button>
                {count > 0 && (
                  <button
                    onClick={() => removeFromShoppingList(item)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
