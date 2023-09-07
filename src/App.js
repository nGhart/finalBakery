import './App.css';
import Routing from './Routing';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import { ShopContextProvider } from './context/context';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
