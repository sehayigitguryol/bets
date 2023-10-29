import BetsList from "./Bets/BetsList";
import Cart from "./Cart/Cart";
import { CartProvider } from "./context";

function App() {
  return (
    <CartProvider>
      <div className="p-6 flex gap-2">
        <BetsList />
        <div className="fixed top-4 right-4" style={{ width: "250px" }}>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
