import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='container mx-auto p-5'>
      <Navbar />
      <Sidebar />
      <div className="p-10 text-xl">
        <p>Home page content...</p>
      </div>
    </div>
  )
}

export default Home
