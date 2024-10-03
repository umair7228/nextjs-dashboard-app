import { FaHome, FaChartBar, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    
    <div className="absolute top-40 left-7 bg-white border-slate-300 shadow-2xl rounded-3xl text-slate-400 w-20 h-[80%] flex flex-col items-center py-5 space-y-6 animate-slide-left ">
        <FaHome size={24} />
        <FaChartBar size={24} />
        <FaUser size={24} />
    </div>

  );
};

export default Sidebar;
