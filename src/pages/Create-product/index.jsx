import { Link } from 'react-router-dom';
import './createProduct.module.css'

export function CreateProduct() {
    return (
        <div>
            <h1>Create Product</h1>
            <Link to="/home">VOLTAR</Link>
        </div>
    );
}