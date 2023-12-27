import styles from './headerHome.module.css';

export function HeaderHome() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <a className={styles.header__link} href='#'>CADASTRO DE PRODUTOS</a>
                <button className={styles.header__button}>CADASTRAR</button>
            </div>
        </header>
    );
}