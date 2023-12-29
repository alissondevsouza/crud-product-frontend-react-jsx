import { HeaderHome } from '../../components/Header-home';
import { TableProducts } from '../../components/Table-products';
import styles from './home.module.css'

export function Home() {

    const products = [
        {
          id: 1,
          name: 'Produto 1',
          price: 19.99,
          description: 'Descrição do Produto 1',
        },
        {
          id: 2,
          name: 'Produto 2',
          price: 29.99,
          description: 'Descrição do Produto 2',
        },
        {
          id: 3,
          name: 'Produto 2',
          price: 29.99,
          description: 'Descrição do Produto 2',
        },
        {
          id: 4,
          name: 'Produto 2',
          price: 29.99,
          description: 'Descrição do Produto 2',
        },
        {
          id: 5,
          name: 'Produto 2',
          price: 29.99,
          description: 'Descrição do Produto 2',
        }
      ];

    return (
        <div>
            <HeaderHome actionButton='CADASTRAR' pathButton='/create' />
            <div className={styles.table}>
              <span className={styles.table__title}>Produtos</span>
              <TableProducts products={products} />
            </div>
        </div>
    );
}