import React from 'react';
import { NavLink } from 'react-router-dom'; // Assuming you're using React Router

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-6">Sidebar</h2>
      <nav className="flex flex-col space-y-4">
        <NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}` } >
          Home
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}` } >
          Profile
        </NavLink>
        <NavLink to="/create" className={({ isActive }) => `px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}` } >
          Create
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
