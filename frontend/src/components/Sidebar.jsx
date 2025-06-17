import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6 shadow-md">
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-[#B8324F] uppercase tracking-wider mb-2">LISTS</h2>
        <button
          onClick={() => navigate('/admin')}
          className={`w-full py-2 rounded-md font-medium shadow ${
            isActive('/admin') ? 'bg-[#B8324F] text-white' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          Users
        </button>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-[#B8324F] uppercase tracking-wider mb-2">ACTIONS</h2>
        <button
          onClick={() => navigate('/admin/create')}
          className={`w-full py-2 rounded-md font-medium shadow ${
            isActive('/admin/create') ? 'bg-[#B8324F] text-white' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          Create User
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;