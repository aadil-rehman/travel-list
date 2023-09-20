export default function Stats({ items }) {

  if (!items.length) {
    return <em className="stats">Start adding some items to your packing list 🚀</em>;
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round(packedItems / numItems * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? <em>You got everything! Ready to go ✈️</em>
        : <em>You have {numItems} items on your list, and you already packed {packedItems}({percentage}%)</em>}
    </footer>
  );
}
