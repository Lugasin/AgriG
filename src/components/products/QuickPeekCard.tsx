import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from 'next/image'; // Import Image component
import Link from 'next/link'; // Import Link component
import { ShoppingCart } from 'lucide-react'; // Import ShoppingCart icon
import { useCart } from '@/lib/cart'; // Import useCart hook

interface Machine {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  stock: number;
  specs?: { [key: string]: string }; // Add specs property
}

interface QuickPeekCardProps {
  machine: Machine;
}


export function QuickPeekCard({ machine }: QuickPeekCardProps) {
   const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
        id: machine.id,
        name: machine.name,
        price: machine.price,
        image: machine.images[0], // Use the first image
    }, 1);
  };

  return (
    <motion.div
      className="relative bg-white rounded-lg overflow-hidden shadow-lg group" // Added group class for hover effects
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
       <Link href={`/products/${machine.id}`}>
         <div className="relative h-48 w-full">
            <Image
              src={machine.images[0] || '/placeholder.png'} // Use the first image or a placeholder
              alt={machine.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110" // Added group-hover scale effect
              loading="lazy" // Lazy load images
            />
         </div>
       </Link>
      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: 0 }
        }}
        className="absolute bottom-0 left-0 w-full bg-white/90 p-4 transition-transform duration-300 ease-in-out" // Added transition
      >
        <h4 className="font-semibold text-gray-900 truncate">{machine.name}</h4> {/* Added truncate */}
        {machine.specs && Object.keys(machine.specs).length > 0 && ( /* Added check for specs existence */
          <p className="text-gray-600 text-sm mb-2">{/* Display a few specs if available */ Object.entries(machine.specs).slice(0, 2).map(([key, value]) => `${key}: ${value}`).join(', ')}...</p>
        )}
         <div className="flex items-center justify-between">
             <span
                className={`inline-block px-2 py-1 text-xs rounded ${
                  machine.stock > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                }`}
              >
                {machine.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
              {/* You can change this to "Add to Quote" button later */}{/* Changed to Add to Cart for now */}
              <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={handleAddToCart}>
                <ShoppingCart className="mr-1 h-4 w-4" /> Add to Cart
              </Button>
         </div>
      </motion.div>
    </motion.div>
  );
}
