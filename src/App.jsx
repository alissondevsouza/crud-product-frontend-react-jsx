import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import { Home } from './pages/Home';
import { CreateProduct } from './pages/Create-product';
import { UpdateProduct } from './pages/Update-product';
import { DetailsProduct } from './pages/Details-product';


export function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" exact element={<Home />} />
            <Route path="/create" exact element={<CreateProduct />} />
            <Route path="/update/:productId" exact element={<UpdateProduct />} />
            <Route path="/details/:productId" exact element={<DetailsProduct />} />
        </Routes>
    );
}