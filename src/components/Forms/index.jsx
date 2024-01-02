import styles from'./forms.module.css'
import  { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export function Forms() {

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
        
        try{
            const postResponse = await axios.post ('http://localhost:4000/product', formData);

            console.log('response: ', postResponse);
''
            const responseData = postResponse.data.message;


            if (postResponse.status === 200) {
                toast.success(responseData, {
                    position: toast.POSITION.TOP_CENTER
                });
                
            } else {
                toast.error(responseData, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }catch(error){
            console.log(error)
        }

        setFormData({
            name: '',
            price: '',
            description: '',   
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formsContainer}>
                    <input 
                        className={styles.imputName} 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder='Digite o nome do produto'
                        value={formData.name}
                        onChange={handleInputChange}
                    />           
                    <input 
                        className={styles.imputPrice} 
                        type="number" 
                        id="price" 
                        name="price"
                        placeholder='Digite o preço do produto'
                        value={formData.price}
                        onChange={handleInputChange}
                    />         
                    <textarea 
                        className={styles.imputDescription} 
                        type="text" 
                        id="description" 
                        name="description"
                        placeholder='Digite a descrição do produto'
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                    <button type='submit' className={styles.create__button}>CADASTRAR</button>
                </div>
            </form>
        </div>
    );
}