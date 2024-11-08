import React, { useState, useEffect } from "react";
import ItemList from "./ItemList"; // Importing ItemList
import items from "./itemsData"; // Importing items array

const planCost = 700000000; // £700 million for 4 people
const costPerImmigrant = planCost / 4; // £175 million per immigrant

function PriceComparison() {
  const [shoppingList, setShoppingList] = useState([]);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(true); // Button visibility state

  // Function to add items to the shopping list (allow duplicates)
  const addToShoppingList = (item) => {
    setShoppingList([...shoppingList, item]);
    setTotal(total + item.price);
  };

  // Function to remove items from the shopping list
  const removeFromShoppingList = (item) => {
    setShoppingList(shoppingList.filter((i) => i.name !== item.name));
    setTotal(total - item.price);
  };

  // Function to remove all items from the shopping list
  const removeAllFromShoppingList = () => {
    setShoppingList([]);
    setTotal(0);
  };

  // Function to compare the total price to the cost of immigrants
  const comparePrice = () => {
    if (total < costPerImmigrant) {
      setResult(
        `Your shopping list (<span style="color: yellow;">£${total.toLocaleString()}</span>) is cheaper than sending an immigrant to Rwanda (<span style="color: yellow;">£${costPerImmigrant.toLocaleString()}</span>)`
      );
    } else {
      const immigrantsNeeded = Math.floor(total / costPerImmigrant); // How many full immigrants
      const remainder = total % costPerImmigrant; // Any leftover cost for partial immigrants
      if (remainder > 0) {
        setResult(
          `Your shopping list (<span style="color: yellow;">£${total.toLocaleString()}</span>) is cheaper than sending ${
            immigrantsNeeded + 1
          } immigrants to Rwanda (<span style="color: yellow;">£${(
            costPerImmigrant *
            (immigrantsNeeded + 1)
          ).toLocaleString()}</span>)`
        );
      } else {
        setResult(
          `Your shopping list (<span style="color: yellow;">£${total.toLocaleString()}</span>) is cheaper than sending ${
            immigrantsNeeded + 1
          } immigrants to Rwanda (<span style="color: yellow;">£${(
            costPerImmigrant *
            (immigrantsNeeded + 1)
          ).toLocaleString()}</span>)`
        );
      }
    }
  };

  // Automatically compare price when total changes
  useEffect(() => {
    comparePrice();
  }, [total]);

  // Toggle the visibility of the button
  const toggleButtonVisibility = () => {
    setIsButtonVisible(!isButtonVisible);
  };

  // Get a comma-separated string of selected items with quantities
  const selectedItemsText = shoppingList
    .reduce((acc, item) => {
      const count = shoppingList.filter((i) => i.name === item.name).length;
      if (count > 0 && !acc.some((i) => i.name === item.name)) {
        acc.push({ name: item.name, count });
      }
      return acc;
    }, [])
    .map(({ name, count }) => `${name} (x${count})`)
    .join(", ");

  return (
    <div style={{ padding: "0 20px", marginTop: "60px" }}>
      {/* The shopping list and actions */}
      <ItemList
        items={items}
        addToShoppingList={addToShoppingList}
        shoppingList={shoppingList}
        removeFromShoppingList={removeFromShoppingList}
        removeAllFromShoppingList={removeAllFromShoppingList}
      />

      {/* Button for toggling visibility */}
      <button style={{ marginTop: "20px" }} onClick={toggleButtonVisibility}>
        Toggle Visibility of Action Button
      </button>

      {/* Conditionally render the action button based on the state */}
      {isButtonVisible && (
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            marginTop: "20px",
            borderRadius: "5px",
          }}
        >
          Action Button
        </button>
      )}

      {/* Selected items and their quantities */}
      {shoppingList.length > 0 && (
        <div
          style={{ marginTop: "30px", fontSize: "16px", fontWeight: "bold" }}
        >
          <span>You could pay for: {selectedItemsText}</span>
        </div>
      )}

      {/* Display the result of the price comparison */}
      <div
        style={{ marginTop: "30px" }}
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </div>
  );
}

export default PriceComparison;
