import { useCartContext } from "../Context/CartProvider";

function Cart() {
  const { calculateTotal, state: items } = useCartContext();
  const total = calculateTotal();

  return (
    <div className="grid gap-2 rounded-xl border border-slate-700 bg-blue-100 p-2">
      {items.map((item) => (
        <div className="grid gap-1" key={item.bet.NID}>
          <h4>{`Maç: ${item.bet.N}`}</h4>
          <h4>{`${item.bet.MBS} Kod: ${item.bet.C} Oran: ${item.betOption.O}`}</h4>
        </div>
      ))}
      <h3>{`Total: ${total.toFixed(2)}`}</h3>
    </div>
  );
}

export default Cart;
