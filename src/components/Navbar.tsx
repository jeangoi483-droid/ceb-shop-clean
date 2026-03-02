"use client";

import { useCart } from "@/lib/store";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <h1>CEB SHOP</h1>
      <p>Panier : {cart.length}</p>
    </nav>
  );
}
