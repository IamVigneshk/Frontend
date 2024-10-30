import React, { useState } from 'react';
import { Users, UserPlus, Settings, LogOut } from 'lucide-react';

interface User {
  email: string;
  isPremium: boolean;
  dateAdded: string;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([
    { email: 'user@example.com', isPremium: true, dateAdded: '2024-03-15' }
  ]);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  const handleAddUser = () => {
    if (newUserEmail) {
      setUsers([...users, {
        email: newUserEmail,
        isPremium,
        dateAdded: new Date().toISOString().split('T')[0]
      }]);
      setNewUserEmail('');
      setIsPremium(false);
      setShowAddUser(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8 text-cyan-500" />
              <h2 className="text-xl font-semibold text-white">Total Users</h2>
            </div>
            <p className="text-3xl font-bold text-white">{users.length}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <Settings className="w-8 h-8 text-purple-500" />
              <h2 className="text-xl font-semibold text-white">Premium Users</h2>
            </div>
            <p className="text-3xl font-bold text-white">
              {users.filter(u => u.isPremium).length}
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Manage Users</h2>
            <button
              onClick={() => setShowAddUser(true)}
              className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 flex items-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Add User
            </button>
          </div>

          {showAddUser && (
            <div className="mb-6 bg-gray-700 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="email"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  placeholder="Enter user email"
                  className="px-4 py-2 bg-gray-600 text-white rounded-md"
                />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isPremium"
                    checked={isPremium}
                    onChange={(e) => setIsPremium(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <label htmlFor="isPremium" className="text-white">Premium Access</label>
                </div>
                <button
                  onClick={handleAddUser}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Add User
                </button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-700">
                  <th className="pb-3">Email</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date Added</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-4 text-white">{user.email}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.isPremium ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {user.isPremium ? 'Premium' : 'Basic'}
                      </span>
                    </td>
                    <td className="py-4 text-gray-400">{user.dateAdded}</td>
                    <td className="py-4">
                      <button className="text-red-400 hover:text-red-500">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}