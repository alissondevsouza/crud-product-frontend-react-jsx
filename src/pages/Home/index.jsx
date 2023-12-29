import { HeaderHome } from '../../components/Header-home';
import { TableProducts } from '../../components/Table-products';
import styles from './home.module.css'
import { useState, useEffect } from 'react';

export function Home() {

   const [products, setProducts] = useState([]);

    useEffect(() => {

      async function getProducts() {

        try {
          const response = await fetch('http://localhost:4000/product');
          
          if(response.ok) {
            const data = await response.json();
            setProducts(data.products);
          }
        }catch(error) {
          console.log(error);
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