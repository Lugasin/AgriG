"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { state, updateQuantity, removeItem, getCartTotal, getItemCount } = useCart();
  const itemCount = getItemCount();
  const cartTotal = getCartTotal();

  if (itemCount === 0) {
    return (
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <ShoppingBag className="h-24 w-24 text-muted-foreground mb-4" />
        <h1 className="font-headline text-3xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 text-lg text-muted-foreground">Looks like you haven't added anything yet.</p>
        <Button asChild className="mt-6" size="lg">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={item.id} className="flex items-center p-4">
              <div className="relative h-24 w-24 rounded-md overflow-hidden mr-4">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px"/>
              </div>
              <div className="flex-grow">
                <Link href={`/products/${item.id}`} className="font-headline font-semibold hover:underline">{item.name}</Link>
                <p className="text-sm text-muted-foreground">${item.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2 mx-4">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                  className="w-12 h-8 text-center"
                />
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="w-24 text-right font-semibold">${(item.price * item.quantity).toLocaleString()}</p>
              <Button variant="ghost" size="icon" className="ml-4 text-muted-foreground hover:text-destructive" onClick={() => removeItem(item.id)}>
                <Trash2 className="h-5 w-5" />
              </Button>
            </Card>
          ))}
        </div>
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({itemCount} items)</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout">
                  Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
