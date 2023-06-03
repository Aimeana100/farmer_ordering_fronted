import CreateFertilizerForm from './StoreKepper/CreateFertilizerForm';
import './App.css';
import CreateSeedForm from './StoreKepper/CreateSeedForm';
import OrderForm from './Farmer/OrderForm';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/new-order" element={<OrderForm />} />
          <Route path="/fertiliser/add" element={<CreateFertilizerForm />} />
          <Route path="/seed/add" element={<CreateSeedForm />} />
          <Route path="/login" element={<CreateFertilizerForm />} />
          <Route path="/register" element={<CreateFertilizerForm />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
