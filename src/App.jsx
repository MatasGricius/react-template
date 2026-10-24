const products = [
  { id: 1, title: "Iphone", price: 1000, onsale: true },
  { id: 2, title: "Macbook", price: 2000, onsale: false },
  { id: 3, title: "Watch", price: 500, onsale: true },
];

import Products from "./components/Products";

function App() {
  return <Products products={products}  />
}

export default App;
