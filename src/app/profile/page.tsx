import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-4xl font-bold mb-8 text-center">User Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Profile Information Section */}
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-4">Profile Information</h2>
          {/* Placeholder for user's profile details */}
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          {/* More profile details here */}
        </div>

        {/* Rewards Section */}
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-4">Rewards</h2>
          <div className="border p-4 rounded-md">
            <h3 className="font-semibold mb-2">Your Rewards:</h3>
            {/* Placeholder for displaying rewards */}
            <ul className="list-disc list-inside">
              <li>10% off next purchase (Expires 12/31/2024)</li>
              <li>Free shipping on orders over $100</li>
              <li>Earn double points on select items</li>
            </ul>
            {/* If no rewards: */}
            {/* <p className="text-sm text-gray-500">No rewards available at this time.</p> */}
          </div>
        </div>

        {/* Discounts Section */}
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-4">Discounts</h2>
          <div className="border p-4 rounded-md">
             <h3 className="font-semibold mb-2">Available Discounts:</h3>
             {/* Placeholder for displaying discounts */}
             <ul className="list-disc list-inside">
                <li>$20 off your first order (New users only)</li>
                <li>Bulk purchase discounts applied automatically</li>
                <li>Seasonal sales and promotions</li>
             </ul>
             {/* If no discounts: */}
             {/* <p className="text-sm text-gray-500">No discounts available at this time.</p> */}
          </div>
        </div>

        {/* Notifications Section */}
        <div>
          <h2 className="font-headline text-2xl font-semibold mb-4">Notifications</h2>
           <div className="border p-4 rounded-md">
            <h3 className="font-semibold mb-2">Your Notifications:</h3>
            {/* Placeholder for displaying notifications */}
            <ul className="list-disc list-inside">
              <li>Your order #123 has been shipped.</li>
              <li>New message from support regarding order #115.</li>
              <li>Upcoming sale on all irrigation equipment.</li>
            </ul>
            {/* If no notifications: */}
            {/* <p className="text-sm text-gray-500">No new notifications.</p> */}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;