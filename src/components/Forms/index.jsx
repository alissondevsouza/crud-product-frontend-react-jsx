import PropTypes from 'prop-types';
import styles from './forms.module.css';

export function Forms( {handleSubmit, handleInputChange, formData, formButton}) {

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
                    <button type='submit' className={styles.create__button}>{formButton}</button>
                </div>
            </form>
        </div>
    );
}
Forms.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    formButton: PropTypes.string.isRequired,
}

