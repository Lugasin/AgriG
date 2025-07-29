"use client";

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart';
import { useEffect, useState } from 'react';

export function CartIcon() {
  const { getItemCount } = useCart();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setItemCount(getItemCount());
  }, [getItemCount, getItemCount()]);

  return (
    <Button asChild variant="ghost" size="icon">
      <Link href="/cart" aria-label={`Shopping cart with ${itemCount} items`}>
        <div className="relative">
          <ShoppingCart className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
              {itemCount}
            </span>
          )}
        </div>
      </Link>
    </Button>
  );
}
