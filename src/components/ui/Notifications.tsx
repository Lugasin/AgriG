import React from 'react';

interface NotificationProps {
  notifications: { id: string; message: string; timestamp: string }[];
}

const Notifications: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div className="border p-4 rounded-md bg-white shadow-sm">
      <h3 className="font-semibold mb-3 text-lg">Notifications</h3>
      {notifications.length === 0 ? (
        <p className="text-sm text-gray-500">No new notifications.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {notifications.map(notification => (
            <li key={notification.id} className="py-2 text-sm text-gray-700">
              <p>{notification.message}</p>
              <p className="text-xs text-gray-400">{notification.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;