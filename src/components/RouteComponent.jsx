import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import CreateFertilizerForm from '../view/StoreKepper/CreateFertilizerForm';
import CreateSeedForm from '../view/StoreKepper/CreateSeedForm';
import OrderForm from '../view/Farmer/OrderForm';
import Login from './login/Login';
import Orders from '../view/Farmer/Orders';
import store from '../redux/store';
import AuthRoutes from '../middleware/AuthRoutes';
import UseNavbar from '../customHook/UseNavbarHook';
import Register from './login/Register';
import Logout from './login/Logout';

const RouteComponent = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <UseNavbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route element={<AuthRoutes roles={['farmer']} />}>
              <Route path="/new-order" element={<OrderForm />} />
              <Route path="/orders" element={<Orders />} />
            </Route>
            <Route element={<AuthRoutes roles={['store-keeper']} />}>
              <Route
                path="/dashboard/fertilizers"
                element={<CreateFertilizerForm />}
              />
              <Route path="/dashboard/seeds" element={<CreateSeedForm />} />
              <Route path="/dashboard/orders" element={<CreateSeedForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default RouteComponent;
