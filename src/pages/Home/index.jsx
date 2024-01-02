import { useEffect, useState } from 'react';
import { HeaderHome } from '../../components/Header-home';
import { TableProducts } from '../../components/Table-products';
import productService from '../../services/Product/productService';
import styles from './home.module.css';

export function Home() {
                                 
   const [products, setProducts] = useState([]);

    useEffect(() => {

      async function getProducts() {
        try {
          const response = await productService.getProducts();
          setProducts(response.products);
  
        }catch(error) {
          console.log('error: ', error);
        }
      }

      getProducts();
    }, []);

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