// src/ShoppingList.js
import React from "react";

function ShoppingList({
  shoppingList,
  removeFromShoppingList,
  total,
  removeAllFromShoppingList,
}) {
  // Count the occurrences of each item in the shopping list
  const itemCount = shoppingList.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
  }, {});

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Show the "Remove All" button only if there's at least 1 item in the shopping list */}
      {shoppingList.length > 0 && (
        <button
          onClick={removeAllFromShoppingList}
          style={{
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Remove All
        </button>
      )}
      <h3>Your Shopping List: £{total.toLocaleString()}</h3>

      {/* Scrollable Grid Container */}
      <div
        style={{
          display: "grid", // Grid layout
          gridTemplateColumns: "repeat(auto-fill, minmax(125px, 1fr))", // Responsive grid
          gap: "10px", // Space between items
        }}
      >
        {Object.entries(itemCount).map(([name, count]) => {
          const item = shoppingList.find((i) => i.name === name); // Find the first occurrence of the item
          return (
            <div
              key={name}
              style={{
                fontSize: "13px",
                backgroundColor: "black", // Black background for each item
                color: "white", // White text
                borderRadius: "5px", // Rounded corners
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Box shadow for each item
                display: "flex", // Flexbox layout inside each item
                flexDirection: "column", // Stack image and text vertically
                justifyContent: "space-between", // Space between content
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              {/* Placeholder image */}
              <img
                src="https://via.placeholder.com/150" // Use a placeholder image
                alt="Placeholder"
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover", // Ensure the image covers the area without distortion
                  marginBottom: "10px", // Space between image and text
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <span>
                {item.name} {count > 1 && `(x${count})`} - £
                {item.price.toLocaleString()}
              </span>
              <button
                onClick={() => removeFromShoppingList(item)}
                style={{
                  fontSize: "95%",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "2px 10px",
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      <h4>Total: £{total.toLocaleString()}</h4>
    </div>
  );
}

export default ShoppingList;
