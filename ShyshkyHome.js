import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

export default function ShyshkyHome() {
  const [amount, setAmount] = useState(0);

  return (
    <div className="min-h-screen bg-cover bg-center p-8" style={{ backgroundImage: 'url("/shyshky_bg.jpg")' }}>
      <div className="max-w-3xl mx-auto text-center">
        <img src="/shyshka_logo.png" alt="Shyshky Logo" className="mx-auto w-40 mb-6 rounded-full shadow-xl" />
        <h1 className="text-5xl font-bold mb-2">Shyshky (SHYSHKA)</h1>
        <p className="text-lg mb-4">🌲 The only token that smells like pine... or weed 😎</p>

        <Card className="bg-white/80 backdrop-blur-md p-4 mt-4">
          <CardContent>
            <p className="mb-2">Total Supply: <strong>10,000,000,000 SHYSHKA</strong></p>
            <p className="mb-2">Tax: <strong>0.1% per transaction</strong> 🔥</p>
            <p className="mb-2">Owner: <code>BoYgxSYTjo4FEu7rkA9hjtFkqBYHjJVm9afwtbeGZodK</code></p>
            <p className="mb-2">Fee Wallet: <code>8rV6Gw8A3rih5EMnxrEEvdDdSZrhBqexvBWrfFWh9jiQ</code></p>
          </CardContent>
        </Card>

        <div className="mt-8">
          <a href="https://jup.ag/swap/SOL-SHYSHKA" target="_blank" rel="noopener noreferrer">
            <Button className="text-xl px-6 py-3 shadow-lg">Buy on Jupiter 🚀</Button>
          </a>
        </div>

        <div className="mt-12 text-left bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2">🧠 About Shyshky</h2>
          <p>
            Born from the sacred forests of Ukraine, "Shyshky" unites two worlds:
            the wholesome pinecone and the legendary rastaman bud 🌲🌿. It's more than a token — it's a lifestyle.
          </p>
          <p className="mt-4">Join the revolution. Hold SHYSHKA. Smoke memes. Stake forests.</p>
        </div>
      </div>
    </div>
  );
}