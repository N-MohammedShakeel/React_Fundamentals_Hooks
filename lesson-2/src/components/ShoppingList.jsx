import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([
      ...items,
      {
        name,
        price: parseFloat(price),
      },
    ]);
    setName("");
    setPrice("");
  };

  return (
    <div>
      ShoppingList
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter item name"
        ></input>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Enter price"
        ></input>

        <button type="submit"> Submit </button>
      </form>
      {items.map((item) => (
        <div key={Math.random()}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;
