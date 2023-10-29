import { CartProvider } from "./Context/CartProvider";
import Bets from "./Bets/Bets";
import Cart from "./Cart/Cart";

function App() {
  return (
    <CartProvider>
      <div className="flex gap-2 p-6">
        <Bets />
        <div className="fixed right-4 top-4" style={{ width: "250px" }}>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
