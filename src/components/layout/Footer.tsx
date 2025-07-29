import Link from 'next/link';
import { Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">AgriSupply Co.</span>
            </div>
            <p className="text-muted-foreground">Powering the future of farming with high-quality equipment and supplies.</p>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-3">Quick Links</h3>
            <nav className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <Link href="/products" className="hover:text-foreground">Products</Link>
              <Link href="/about" className="hover:text-foreground">About Us</Link>
            </nav>
          </div>
          <div>
             <h3 className="font-headline font-semibold mb-3">Support</h3>
            <nav className="flex flex-col gap-2 text-muted-foreground">
              <Link href="/cart" className="hover:text-foreground">Cart</Link>
              <Link href="/login" className="hover:text-foreground">My Account</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-3">Contact Us</h3>
            <div className="text-muted-foreground space-y-2">
              <p>123 Farm Road, Greenfield, AG 54321</p>
              <p>Email: contact@agrisupply.co</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgriSupply Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
