import styles from'./forms.module.css'

export function Forms() {
    return (
        <div>
            <form>
                <div className={styles.formsContainer}>
                    <input 
                        className={styles.imputName} 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder='Digite o nome do produto'
                    />           
                    <input 
                        className={styles.imputPrice} 
                        type="text" 
                        id="price" 
                        name="price"
                        placeholder='Digite o preço do produto'
                    />         
                    <textarea 
                        className={styles.imputDescription} 
                        type="text" 
                        id="description" 
                        name="description"
                        placeholder='Digite a descrição do produto'
                    />
                </div>
            </form>
        </div>
    );
}