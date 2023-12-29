import { Forms } from '../../components/Forms';
import { HeaderHome } from '../../components/Header-home';
import styles from './createProduct.module.css'

export function CreateProduct() {
    return (
        <div>
            <HeaderHome actionButton='VOLTAR' pathButton='/home' />
            <div className={styles.create__container}>
                <span className={styles.create__title}>Cadastrar</span>
                <Forms />
                <button className={styles.create__button}>CADASTRAR</button>
            </div>
        </div>
    );
}