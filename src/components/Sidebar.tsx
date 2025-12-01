import { useSidebarStore } from "../store";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
        onClick={closeSidebar}
      />
      <div
        className={`
        fixed md:static top-0 left-0 h-full w-[260px] bg-white z-50 p-5 shadow-xl 
        transition-transform duration-300
        md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <h2 className="text-2xl font-semibold mb-5">Sidebar Menu</h2>

        <ul className="space-y-4">
          <li className="text-lg hover:text-blue-600 cursor-pointer">Home</li>
          <li className="text-lg hover:text-blue-600 cursor-pointer">Services</li>
          <li className="text-lg hover:text-blue-600 cursor-pointer">Portfolio</li>
          <li className="text-lg hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button
          onClick={closeSidebar}
          className="mt-10 bg-red-500 text-white px-4 py-2 rounded md:hidden"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Sidebar;
