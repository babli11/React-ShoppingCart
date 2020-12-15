import React from "react";
import { useGlobalContext } from "./context";

import CartContainer from "./CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <CartContainer />
    </main>
  );
}

export default App;
