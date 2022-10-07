import './App.css';
import './components/Home.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Accessories from './components/Accessories';
import ProductDescriptions from './components/ProductDescriptions';
import Faq from './components/Faq';
import Newproduct from './components/Newproduct';
import Aboutus from './components/About';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='App'>
      <ToastContainer/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/productdescriptions' element={<ProductDescriptions  />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/newproduct' element={<Newproduct />} />
          <Route path='/about' element={<Aboutus />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
