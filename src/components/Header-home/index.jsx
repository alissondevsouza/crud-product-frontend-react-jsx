import { Link } from 'react-router-dom';
import styles from './headerHome.module.css';

export function HeaderHome() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Link to='/home' className={styles.header__link}>CADASTRO DE PRODUTOS</Link>
                <Link to='/create' className={styles.header__button}>CADASTRAR</Link>
            </div>
        </header>
    );
}