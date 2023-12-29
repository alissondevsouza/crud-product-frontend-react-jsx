import { Link } from 'react-router-dom';
import styles from './headerHome.module.css';
import PropTypes from 'prop-types';

export function HeaderHome({ actionButton, pathButton }) {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Link to='/home' className={styles.header__link}>CADASTRO DE PRODUTOS</Link>
                <Link to={pathButton} className={styles.header__button}>{actionButton}</Link>
            </div>
        </header>
    );
}

HeaderHome.propTypes = {
    actionButton: PropTypes.string.isRequired,
    pathButton: PropTypes.string.isRequired,
  };