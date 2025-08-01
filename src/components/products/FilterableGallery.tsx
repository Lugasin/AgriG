"use client";

import { useState, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QuickPeekCard } from './QuickPeekCard'; // Import QuickPeekCard

interface Machine {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  stock: number;
   specs?: { [key: string]: string }; // Add specs property to Machine interface
}

interface FilterableGalleryProps {
  machines: Machine[];
}

export function FilterableGallery({ machines }: FilterableGalleryProps) {
  const [filters, setFilters] = useState<{ [cat: string]: boolean }>({});

  const categories = Array.from(new Set(machines.map(m => m.category)));
  const filtered = useMemo(() => {
    const active = Object.keys(filters).filter(k => filters[k]);
    if (!active.length) return machines;
    return machines.filter(m => active.includes(m.category));
  }, [machines, filters]);

  return (
    <div className="px-4 py-8">
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map(cat => (
          <label key={cat} className="flex items-center space-x-2">
            <Checkbox
              checked={filters[cat] || false}
              onCheckedChange={(v) => setFilters(f => ({ ...f, [cat]: !!v }))}
            />
            <span className="capitalize">{cat}</span>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((m) => (
          <QuickPeekCard key={m.id} machine={m} /> /* Use QuickPeekCard here */
        ))}
      </div>
    </div>
  );
}

export default FilterableGallery; // Added default export