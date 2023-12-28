import { Link } from 'react-router-dom';
import styles from './tableProducts.module.css'
import PropTypes from 'prop-types';

export const TableProducts = ({ products }) => {
    return (
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
                {products.map((product) => (
                    <tr key={product.id}>
                        <td >{product.id}</td>
                        <td >{product.name}</td>
                        <td >R$ {product.price}</td>
                        <td >{product.description}</td>
                        <td >
                            <div className={styles.container__button}>
                                <Link to='/details' className={styles.button__table}>VER</Link>
                                <Link to='/update' className={styles.button__table}>EDIT</Link>
                                <button className={styles.button__table}>DELETE</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TableProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired
}