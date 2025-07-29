import React, { useContext } from "react";
// Assuming you have a QuoteContext for managing quote items
// You might need to create this context if you haven't already
// import { QuoteContext } from "@/context/QuoteContext";
import { Button } from "@/components/ui/button";
import Link from 'next/link'; // Import Link component

// Placeholder QuoteContext and types - replace with your actual implementation
interface QuoteItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface QuoteContextType {
  items: QuoteItem[];
  total: number;
  addItem: (item: Omit<QuoteItem, 'quantity'>, quantity: number) => void;
  removeItem: (id: string) => void;
  clearQuote: () => void;
}

// Create a dummy context for now - replace with your actual QuoteContext
const QuoteContext = React.createContext<QuoteContextType>({
  items: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearQuote: () => {},
});


export function SidebarQuote() {
  // Use your actual QuoteContext here
  // const { items, total, removeItem } = useContext(QuoteContext);
  const { items, total, removeItem } = useContext(QuoteContext); // Using dummy context for now


  // Placeholder for sidebar visibility - you'll manage this state elsewhere
  const isSidebarOpen = true; // Replace with state from your layout or context

  return (
    <aside
      className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 transform transition-transform ease-in-out duration-300 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      } md:translate-x-0`} // Added responsive visibility
    >
      <h3 className="text-xl font-bold mb-4">Quote Cart</h3>
      <ul className="space-y-3 mb-4 overflow-y-auto max-h-[60vh]">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500">Your quote cart is empty.</p>
        ) : (
          items.map(i => (
            <li key={i.id} className="flex justify-between items-center">
              <span>{i.name} x {i.quantity}</span> {/* Display quantity */}
              <Button variant="ghost" size="sm" onClick={() => removeItem(i.id)} className="text-red-500 hover:text-red-700">×</Button>
            </li>
          ))
        )}
      </ul>
      <p className="font-semibold mb-4">Est. Total: ${total.toFixed(2)}</p> {/* Format total */}
      <Button className="w-full bg-green-700" asChild> {/* Use asChild for Link */}
         <Link href="/checkout">
            Proceed to Checkout
         </Link>
      </Button>
      {/* Optional: Clear Quote button */}
      {/* {items.length > 0 && (
          <Button variant="outline" size="sm" onClick={clearQuote} className="w-full mt-2">Clear Quote</Button>
      )} */}
    </aside>
  );
}
