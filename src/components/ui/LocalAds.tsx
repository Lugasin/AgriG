import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AdProps {
  ads: { id: string; title: string; description: string; imageUrl: string; linkUrl: string }[];
}

const LocalAds: React.FC<AdProps> = ({ ads }) => {
  return (
    <div className="border p-4 rounded-md bg-gray-100 shadow-sm">
      <h3 className="font-semibold mb-3 text-lg">Local Promotions</h3>
      {ads.length === 0 ? (
        <p className="text-sm text-gray-500">No local promotions available.</p>
      ) : (
        <div className="space-y-4">
          {ads.map(ad => (
            <Link href={ad.linkUrl} key={ad.id} className="flex items-center space-x-4 hover:bg-gray-200 rounded-md p-2 -m-2 transition-colors duration-200">
              <div className="relative w-20 h-20 flex-shrink-0">
                 <Image src={ad.imageUrl} alt={ad.title} fill className="object-cover rounded" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{ad.title}</h4>
                <p className="text-sm text-gray-700">{ad.description}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocalAds;