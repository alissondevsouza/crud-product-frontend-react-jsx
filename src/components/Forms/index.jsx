import styles from'./forms.module.css'
import  { useState } from 'react';

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
            const postResponse = await fetch('http://localhost:4000/product', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }   
            });

            if (postResponse.ok) {
                const responseData = await postResponse.json(); // Processa a resposta como JSON
                console.log('Resposta do backend:', responseData);
            } else {
                console.log('Erro ao enviar a requisição:', postResponse.status);
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