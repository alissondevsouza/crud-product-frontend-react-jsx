import axios from "axios"

const API_URL = "http://localhost:4000/product";

const productService = {

    async getProducts() {
        const response = await axios.get(API_URL);
        return response.data;
    },

    async createProduct(product) {
        const response = await axios.post(API_URL, product);
        return response.data;
    }
}

export default productService;


