import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './tableProducts.module.css';

export const TableProducts = ({ products }) => {

    const [currentStep, setCurrentStep] = useState(1);
    const productsPerPage = 5;

    const indexOfLastProduct = currentStep * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const paginate = (pageNumber) => setCurrentStep(pageNumber);

    return (
        <div>
            <table className={styles.table}>
                <thead className={styles.table__header}>
                    <tr className={styles.table__itens__header}>
                        <th>#</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                        <th>DESCRIÇÃO</th>
                        <th>AÇÃO</th>
                    </tr>
                </thead>
                <tbody >
                    {currentProducts.length === 0 && <tr><td colSpan="5">Nenhum produto cadastrado</td></tr>}
                    {currentProducts.map((product) => (
                        <tr key={product.id}>
                            <td >{product.id}</td>
                            <td >{product.name}</td>
                            <td >R$ {product.price}</td>
                            <td >{product.description}</td>
                            <td >
                                <div className={styles.container__button}>
                                    <Link to='/details' className={styles.button__table}>VER</Link>
                                    <Link to={`/update/${product.id}`} className={styles.button__table}>EDIT</Link>
                                    <button className={styles.button__table}>DELETE</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {totalPages > 1 && (
                <ul className={styles.pagination}>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <li key={index} className={currentStep === index + 1 ? styles.active : null}>
                            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

TableProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired
}