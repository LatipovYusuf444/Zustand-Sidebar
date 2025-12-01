import { useSidebarStore } from "../store";
import { Menu } from "lucide-react";

const Navbar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <nav className="w-full bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
      <h1 className="text-xl font-bold">My Website</h1>
      <div className="hidden md:flex gap-6 text-lg">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Portfolio</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
      </div>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded hover:bg-white/20"
      >
        <Menu size={28} />
      </button>
    </nav>
  );
};

export default Navbar;
