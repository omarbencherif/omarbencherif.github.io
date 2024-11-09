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
  const removeFromShoppingList = (item) => {
    // Find the first occurrence of the item and remove it
    const index = shoppingList.findIndex((i) => i.name === item.name);

    if (index !== -1) {
      // Check if the item exists in the list
      // Remove the item at the found index
      const updatedShoppingList = [...shoppingList];
      updatedShoppingList.splice(index, 1);

      // Update the shopping list and total
      setShoppingList(updatedShoppingList);
      setTotal(total - item.price);
    }
  };
  // Clear all items
  const removeAllFromShoppingList = () => {
    setShoppingList([]);
    setTotal(0);
  };

  // Generate the comparison result message for the sticky header
  const generateResultMessage = () => {
    if (total < costPerImmigrant) {
      return `Your shopping list (<span style="color: #76ff03;">£${total.toLocaleString()}</span>) is cheaper than sending one migrant to Rwanda (<span style="color: #ff9800;">£${costPerImmigrant.toLocaleString()}</span>).`;
    } else {
      const immigrantsNeeded = Math.floor(total / costPerImmigrant);
      const totalCostForImmigrants = immigrantsNeeded * costPerImmigrant;

      return `Your shopping list (<span style="color: #76ff03;">£${total.toLocaleString()}</span>) is cheaper than  sending ${
        immigrantsNeeded + 1
      } migrants to Rwanda at a total cost of <span style="color: #ff9800;">£${totalCostForImmigrants.toLocaleString()}</span>`;
    }
  };

  // Generate the detailed deport message
  const generateDeportMessage = () => {
    if (total === 0) {
      return `Add some items to see if you are capable of spending worse than the government!`;
    }

    // Calculate the maximum number of immigrants that can be deported
    const immigrants = Math.ceil(total / costPerImmigrant);

    // Calculate how much money is left after deporting the maximum number of immigrants
    const totalSpentOnImmigrants = immigrants * costPerImmigrant;
    const spareAmount = totalSpentOnImmigrants - total;

    // Summarize the shopping list
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

    // Generate the final message
    return `
      ${
        immigrants > 1
          ? `You could deport <h3 style="margin: 9px;"> ${immigrants}  illegal migrants </h3>to Rwanda, or you could pay for: <span style="font-weight: bold;">${coloredItemSummary}</span>` +
            (spareAmount > 0
              ? ` and have £${spareAmount.toLocaleString()} left over!`
              : "")
          : immigrants === 1
          ? `You could deport 1 illegal migrant to Rwanda, or you could pay for: <span style="font-weight: bold;">${coloredItemSummary}</span>` +
            (spareAmount > 0
              ? ` and have £${spareAmount.toLocaleString()} left over!`
              : "")
          : `You could deport an illegal migrant to Rwanda, or you could pay for: <span style="font-weight: bold;">${coloredItemSummary}</span>` +
            (spareAmount > 0
              ? ` and have £${spareAmount.toLocaleString()} left over!`
              : "")
      }
    `;
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
          In 2023, the UK government announced the controversial Rwanda plan,
          which ultimately led to the deportation of just 4 migrants at a cost
          of 700 million pounds to British taxpayers. The plan was scrapped soon
          after.
        </p>
        <p className="description">
          This failed initiative serves as a stark example of how large sums can
          be spent on controversial policies.
        </p>
        <p className="description">
          This site allows you to explore all the other things that could have
          been funded with that money, offering comparisons of various costs and
          expenses.
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
            color: "white",
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

ReactDOM.render(<App />, document.getElementById("root"));
