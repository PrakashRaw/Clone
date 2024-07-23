import './App.css'
import Dashboard from './Components/Code.jsx';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar.jsx';

function App() {
  return (
    <>
     <Navbar/>
     <div className='flex bg-[#222222]'>
     <Sidebar/>
     <Dashboard/>
     </div>
    </>
  );
}

export default App
