
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Showcasemart from './components/Showcasemart';
import { ShopContextProvider } from './context/ShopContext';

function App() {
 
  return (
    <>
     <ShopContextProvider>
       <Navbar   />
       <Showcasemart/>
       <Footer/>
     </ShopContextProvider>
    </>
  );
}

export default App;
