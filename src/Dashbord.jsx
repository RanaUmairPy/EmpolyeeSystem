import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
          onClick={() => alert("Logged Out!")}
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Welcome, User!</h2>
          <p className="text-gray-500">Here’s an overview of your dashboard.</p>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg text-gray-700">Statistics</h3>
            <p className="text-gray-500 mt-2">View your recent activity stats.</p>
          </div>

          {/* Widget 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg text-gray-700">Tasks</h3>
            <p className="text-gray-500 mt-2">Check your pending tasks here.</p>
          </div>

          {/* Widget 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg text-gray-700">Messages</h3>
            <p className="text-gray-500 mt-2">Review new messages.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
