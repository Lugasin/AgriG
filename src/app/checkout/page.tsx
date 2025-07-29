"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useCart } from '@/lib/cart';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

const checkoutSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  address: z.string().min(5, { message: "Address is required." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State is required." }),
  zip: z.string().regex(/^\d{5}$/, { message: "Invalid ZIP code." }),
  cardName: z.string().min(2, { message: "Name on card is required." }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Invalid card number." }),
  cardExp: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Invalid format (MM/YY)." }),
  cardCvc: z.string().regex(/^\d{3,4}$/, { message: "Invalid CVC." }),
});

export default function CheckoutPage() {
  const { state, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardName: '',
      cardNumber: '',
      cardExp: '',
      cardCvc: '',
    },
  });

  const onSubmit = (values: z.infer<typeof checkoutSchema>) => {
    console.log('Order placed:', values);
    toast({
      title: 'Order Placed!',
      description: 'Thank you for your purchase. We will be in touch shortly.',
    });
    clearCart();
    router.push('/');
  };
  
  if (state.items.length === 0) {
    router.replace('/cart');
    return null;
  }
  
  const cartTotal = getCartTotal();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-4xl font-bold mb-8 text-center">Checkout</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="fullName" render={({ field }) => (
                  <FormItem className="md:col-span-2"><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem className="md:col-span-2"><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="address" render={({ field }) => (
                  <FormItem className="md:col-span-2"><FormLabel>Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="city" render={({ field }) => (
                  <FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="state" render={({ field }) => (
                  <FormItem><FormLabel>State</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="zip" render={({ field }) => (
                  <FormItem><FormLabel>ZIP Code</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <FormField control={form.control} name="cardName" render={({ field }) => (
                  <FormItem className="md:col-span-2"><FormLabel>Name on Card</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                 <FormField control={form.control} name="cardNumber" render={({ field }) => (
                  <FormItem className="md:col-span-2"><FormLabel>Card Number</FormLabel><FormControl><Input placeholder="•••• •••• •••• ••••" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="cardExp" render={({ field }) => (
                  <FormItem><FormLabel>Expiration (MM/YY)</FormLabel><FormControl><Input placeholder="MM/YY" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="cardCvc" render={({ field }) => (
                  <FormItem><FormLabel>CVC</FormLabel><FormControl><Input placeholder="•••" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline">Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {state.items.map(item => (
                    <li key={item.id} className="flex justify-between">
                      <span>{item.name} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" size="lg" className="w-full">
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </form>
      </Form>
    </div>
  );
}
