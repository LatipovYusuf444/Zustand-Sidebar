import { useSidebarStore } from "../store";

const Navbar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

  return (
    <div className="w-full p-4 flex justify-between bg-blue-600 text-white">
      <h1 className="text-xl font-bold">My Website</h1>
      <button
        onClick={toggleSidebar}
        className="px-4 py-2 bg-black/20 rounded-md"
      >
        Menu
      </button>
    </div>
  );
};

export default Navbar;
