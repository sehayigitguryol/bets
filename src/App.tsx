import BetsList from "./Bets/BetsList";
import { CartProvider } from "./context";

function App() {
  return (
    <div className="p-6">
      <CartProvider>
        <BetsList />
      </CartProvider>
    </div>
  );
}

export default App;
