import styles from './updateProduct.module.css';
import { HeaderHome } from '../../components/Header-home';

export function UpdateProduct() {
    return (
        <div>
            <HeaderHome actionButton='VOLTAR' pathButton='/home' />
            <div className={styles.update__container}>
                <span className={styles.update__title}>Atualizar</span>
            </div>
        </div>
    );
}