import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold">AgriSupply Co.</span>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <Link href="/products" className="hover:text-foreground">Products</Link>
            <Link href="/cart" className="hover:text-foreground">Cart</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgriSupply Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
