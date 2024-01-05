import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Forms } from '../../components/Forms';
import { HeaderHome } from '../../components/Header-home';
import productService from '../../services/Product/productService';
import styles from './createProduct.module.css';

export function CreateProduct() {

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData, [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const postResponse = await productService.createProduct(formData);

            if (postResponse.code === 201) {
                toast.success(postResponse.message, {
                    position: toast.POSITION.TOP_CENTER
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

        setFormData({
            name: '',
            price: '',
            description: '',
        });
    }

    return (
        <div>
            <HeaderHome actionButton='VOLTAR' pathButton='/home' />
            <div className={styles.create__container}>
                <span className={styles.create__title}>Cadastrar</span>
                <Forms
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    formData={formData}
                    formButton='CADASTRAR'
                 />
                <ToastContainer />
            </div>
        </div>
    );
}