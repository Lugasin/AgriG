"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/lib/cart';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    }, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product.images[activeImage]}
              alt={`${product.name} image ${activeImage + 1}`}
              fill
              className="object-cover animate-fade-in"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                className={`relative aspect-video w-full rounded-md overflow-hidden ring-offset-background ring-primary transition-all ${activeImage === index ? 'ring-2' : 'opacity-70 hover:opacity-100'}`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="py-4">
          <p className="text-sm font-medium text-primary">{product.category}</p>
          <h1 className="font-headline text-3xl md:text-4xl font-bold mt-1">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
          <p className="font-headline text-4xl font-bold text-primary mt-6">
            ${product.price.toLocaleString()}
          </p>

          <Separator className="my-8" />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 h-10 text-center"
                aria-label="Quantity"
              />
              <Button variant="outline" size="icon" onClick={() => setQuantity(q => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" onClick={handleAddToCart} className="flex-grow">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          
          <div className="mt-8">
            <h3 className="font-headline text-xl font-semibold mb-4">Specifications</h3>
            <ul className="space-y-2 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key} className="flex justify-between border-b pb-2">
                        <span className="font-medium text-muted-foreground">{key}</span>
                        <span>{value}</span>
                    </li>
                ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
