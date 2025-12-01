import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 md:ml-[260px]">
          <h1 className="text-3xl font-bold mb-5">Home Page</h1>
          <p className="text-xl">
            Home page content...
          </p>
        </main>
      </div>

    </div>
  );
};

export default Home;
