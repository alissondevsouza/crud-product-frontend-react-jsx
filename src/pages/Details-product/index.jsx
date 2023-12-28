import { Link } from 'react-router-dom';
import './detailsProduct.module.css';

export function DetailsProduct() {
    return (
        <div>
            <h1>Details Product</h1>
            <Link to="/home">VOLTAR</Link>
        </div>
    );
}