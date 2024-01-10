import { useEffect, useState } from 'react';
import { HeaderHome } from '../../components/Header-home';
import { TableProducts } from '../../components/Table-products';
import productService from '../../services/Product/productService';
import styles from './home.module.css';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Home() {
                                 
   const [products, setProducts] = useState([]);

   async function getProducts() {
      try {
        const response = await productService.getProducts();

        setProducts(response.products);

      }catch(error) {
        console.error('error: ', error);
      }
    }

    async function deleteProduct(id) {
      try {
          const response = await productService.deleteProduct(id);

          if (response.code === 200) {
              toast.success(response.product, {
                  position: toast.POSITION.TOP_CENTER
              });

              getProducts();
          } else {
              toast.error(response.message, {
                  position: toast.POSITION.TOP_CENTER
              });
          }    
      }catch(error) {
          console.error('error: ', error);
      }
    }

    useEffect(() => {

      getProducts();
    }, []);

    return (
        <div>
            <HeaderHome actionButton='CADASTRAR' pathButton='/create' />
            <div className={styles.table}>
              <span className={styles.table__title}>Produtos</span>
              <TableProducts products={products} deleteProduct={deleteProduct} />
              <ToastContainer />
            </div>
        </div>
    );
}