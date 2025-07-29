"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/lib/cart';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
    }, 1);
  };
  
  return (
    <Card className="group overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl animate-fade-in">
      <CardContent className="p-0">
        <Link href={`/products/${product.id}`}>
          <div className="relative h-56 w-full">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-0"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              data-ai-hint="tractor"
            />
            <Image
              src={product.images[1]}
              alt={`${product.name} lifestyle`}
              fill
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              data-ai-hint="farm"
            />
          </div>
        </Link>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h3 className="font-headline text-lg font-semibold truncate">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xl font-bold text-primary">
              ${product.price.toLocaleString()}
            </p>
            <Button size="icon" variant="outline" onClick={handleAddToCart} aria-label={`Add ${product.name} to cart`}>
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
