import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ItemList from "./ItemList"; // Importing ItemList
import items from "./itemsData"; // Importing items array

const planCost = 700000000; // £700 million for 4 people
const costPerImmigrant = planCost / 4; // £175 million per immigrant

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState("");
  const [deportMessage, setDeportMessage] = useState("");

  // Add items to shopping list
  const addToShoppingList = (item) => {
    setShoppingList([...shoppingList, item]);
    setTotal(total + item.price);
  };

  // Remove items from shopping list
  const removeFromShoppingList = (item) => {
    setShoppingList(shoppingList.filter((i) => i.name !== item.name));
    setTotal(total - item.price);
  };

  // Clear all items
  const removeAllFromShoppingList = () => {
    setShoppingList([]);
    setTotal(0);
  };

  // Generate the comparison result message for the sticky header
  const generateResultMessage = () => {
    if (total < costPerImmigrant) {
      return `Your shopping list (<span style="color: #76ff03;">£${total.toLocaleString()}</span>) is cheaper than sending one immigrant to Rwanda (<span style="color: #ff9800;">£${costPerImmigrant.toLocaleString()}</span>).`;
    } else {
      const immigrantsNeeded = Math.floor(total / costPerImmigrant);
      const totalCostForImmigrants = immigrantsNeeded * costPerImmigrant;

      return `Your shopping list (<span style="color: #76ff03;">£${total.toLocaleString()}</span>) is equivalent to deporting ${immigrantsNeeded} immigrant(s) to Rwanda at a total cost of <span style="color: #ff9800;">£${totalCostForImmigrants.toLocaleString()}</span>`;
    }
  };

  // Generate the detailed deport message
  const generateDeportMessage = () => {
    if (total === 0) {
      return `Add some items to see if you are capable of spending worse than the government!`;
    }

    const immigrants = Math.floor(total / costPerImmigrant);
    const itemSummary = shoppingList.reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});

    const coloredItemSummary = Object.keys(itemSummary)
      .map(
        (itemName) =>
          `<span style="color: #ff9800;">${itemName}</span> <span style="color: #76ff03;">x${itemSummary[itemName]}</span>`
      )
      .join(", ");

    const spareAmount = total % costPerImmigrant;

    if (immigrants < 1) {
      return `You could deport an immigrant to Rwanda, or you could pay for: <span style="font-weight: bold;">${coloredItemSummary}</span>${
        spareAmount > 0
          ? ` with £${spareAmount.toLocaleString()} to spare!`
          : ""
      }`;
    } else if (immigrants > 1) {
      return `You could deport ${immigrants} immigrants to Rwanda, or you could pay for: <span style="font-weight: bold;">${coloredItemSummary}</span>${
        spareAmount > 0
          ? ` with £${spareAmount.toLocaleString()} to spare!`
          : ""
      }`;
    } else {
      return `You could pay for part of the cost of sending an immigrant to Rwanda with your shopping list: <span style="font-weight: bold;">${coloredItemSummary}</span>${
        spareAmount > 0
          ? ` with £${spareAmount.toLocaleString()} to spare!`
          : ""
      }`;
    }
  };

  // Update messages whenever total changes
  useEffect(() => {
    setResult(generateResultMessage());
    setDeportMessage(generateDeportMessage());
  }, [total]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="header">
        <h1 className="title">
          Is it cheaper than deporting someone to Rwanda?
        </h1>
        <p className="description">
          In 2023, the UK’s scrapped Rwanda plan, which ultimately deported 4
          immigrants, cost British taxpayers 700 million pounds. This failed
          plan serves as a stark example of how large sums can be spent on
          controversial policies.
        </p>
      </div>

      {/* Sticky Headers Container */}
      <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "10",
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        {/* Result Message */}
        <h3
          style={{
            margin: "0",
            padding: "5px",
            fontSize: "1em",
            color: "white",
          }}
          dangerouslySetInnerHTML={{ __html: result }}
        />

        {/* Deport Message */}
        <h3
          style={{
            margin: "0",
            padding: "5px",
            fontSize: "0.9em",
            color: "lightgray",
          }}
          dangerouslySetInnerHTML={{ __html: deportMessage }}
        />
      </div>

      <div style={{ padding: "0 20px", marginTop: "60px" }}>
        <ItemList
          items={items}
          addToShoppingList={addToShoppingList}
          shoppingList={shoppingList}
          removeFromShoppingList={removeFromShoppingList}
          removeAllFromShoppingList={removeAllFromShoppingList}
        />
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
