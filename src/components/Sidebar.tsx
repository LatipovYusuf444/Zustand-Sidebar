import { useSidebarStore } from "../store";

const Sidebar = () => {
  const isOpen = useSidebarStore((state) => state.isOpen);
  const closeSidebar = useSidebarStore((state) => state.closeSidebar);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`
          fixed top-0 left-0 h-full w-[280px] bg-white z-50 p-5 shadow-xl 
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h2 className="text-2xl font-semibold mb-5">Sidebar Menu</h2>

        <ul className="space-y-4">
          <li className="text-lg">Home</li>
          <li className="text-lg">Services</li>
          <li className="text-lg">Portfolio</li>
          <li className="text-lg">Contact</li>
        </ul>
        <button
          onClick={closeSidebar}
          className="mt-10 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
