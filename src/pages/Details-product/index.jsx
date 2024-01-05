import styles from './detailsProduct.module.css';
import { HeaderHome } from '../../components/Header-home';
import { useEffect, useState } from 'react';
import productService from '../../services/Product/productService';
import { useParams } from 'react-router-dom';
import image from '/public/img-produto-teste.png'


export function DetailsProduct() {

    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        async function getDetailsProduct() {
            try {
                const response = await productService.getProductById(productId);
                
                setProduct(response.product);
                
            }catch (error) {
                console.log(error.response.data.message);
            }
        }

        getDetailsProduct();
    
    }, [productId]);
    
    return (
        <div>
            <HeaderHome actionButton='VOLTAR' pathButton='/home' />
            <div className={styles.details__container}>
                <span className={styles.details__title}>
                    Detalhes do Produto
                </span>

                <div className={styles.container__product}>
                    <div className={styles.product_image}>
                        <img src={image} alt={product.name} />  
                    </div>

                    <div className={styles.product__details}>
                        <h2>{product.name}</h2>
                        <span>Preço: R$ {product.price}</span>
                        <div className={styles.description}>
                            <h3>Descrição:</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}