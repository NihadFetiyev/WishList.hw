import './App.css';
import WishListProvider from './context/Wishlist';
import Navbar from './navbar';
import Home from './pages/home';

function App() {
  return (
    <>
    <WishListProvider>
      <Navbar/>
      <Home/> 
    </WishListProvider>
    </>
  );
}

export default App;
