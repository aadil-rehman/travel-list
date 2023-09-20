import { useState } from "react";

export default function Form({ onAddItems }) {

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // const [items, setItem] = useState([]);
  function handleSubmit(e) {
    e.preventDefault(); //to prevent reloading after every submit

    if (!description) return;
    const newItem = {
      description, quantity, packed: false, id: Date.now()
    };

    onAddItems(newItem);

    //Resetting the input values after submit
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => (i + 1)).map(
          ((num) => <option value={num} key={num}>
            {num}
          </option>)
        )}
      </select>
      <input type="text" placeholder="text..." value={description} onChange={(e) => {
        setDescription(e.target.value);
      }} />
      <button>Add</button>
    </form>
  );
}
