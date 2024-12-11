import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev);
  };
  return (
    <aside className= {`${isMinimized ? 'w-16': 'w-14'}bg-white p-4 text-black shadow-md min-h-screen transition-all duration-300 flex-col"`}>
       <button onClick={toggleSidebar} className="mb-4 p-2 text-black rounded hover:bg-gray-300">
          {isMinimized ? '>' : '<'}
        </button>
        {!isMinimized && (<h2 className="text-xl font-semibold mb-4">Sidebar Section</h2>)}
    </aside>
  );
};

export default Sidebar;