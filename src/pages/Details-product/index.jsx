import styles from './detailsProduct.module.css';
import { HeaderHome } from '../../components/Header-home';

export function DetailsProduct() {
    return (
        <div>
        <HeaderHome actionButton='VOLTAR' pathButton='/home' />
        <div className={styles.details__container}>
            <span className={styles.details__title}>Detalhes</span>
        </div>
    </div>
    );
}