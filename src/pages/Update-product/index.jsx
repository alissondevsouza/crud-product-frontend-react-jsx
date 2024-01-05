import styles from './updateProduct.module.css';
import { HeaderHome } from '../../components/Header-home';
import { Forms } from '../../components/Forms';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import productService from '../../services/Product/productService';
import { useParams } from 'react-router-dom';

export function UpdateProduct() {

    const { productId } = useParams();

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
    });

    useEffect(() => {
        async function getDetailsProduct() {
            try {
                const response = await productService.getProductById(productId);

                if (response.code === 200) {
                    const { name, price, description } = response.product;

                    setFormData({
                        name,
                        price,
                        description,
                    });
                }
            }catch (error) {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }

        getDetailsProduct();

    }, [productId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData, [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const postResponse = await productService.updateProduct(productId, formData);

            if (postResponse.code === 200) {
                toast.success(postResponse.message, {
                    position: toast.POSITION.TOP_CENTER
                });

                setFormData({
                    name: '',
                    price: '',
                    description: '',
                });
                
            } else {
                
                toast.error(postResponse.message, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        } catch (error) {
            toast.error(error.response.data.message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <div>
            <HeaderHome actionButton='VOLTAR' pathButton='/home' />
            <div className={styles.update__container}>
                <span className={styles.update__title}>Atualizar</span>
            </div>
            <Forms
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    formData={formData}
                    formButton='ATUALIZAR'
            />
            <ToastContainer />
        </div>
    );
}