"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MountainIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CartIcon } from '../cart/CartIcon';
import { FormEvent } from 'react';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
  ];

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;
    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <MountainIcon className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">Massrides</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
            <form onSubmit={handleSearch} className="relative hidden lg:block w-full max-w-sm">
              <Input
                type="search"
                name="query"
                placeholder="AI Search for products..."
                className="pl-10 h-9"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
