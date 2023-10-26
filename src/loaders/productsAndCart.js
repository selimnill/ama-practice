import { getStoredCart } from "../utilities/fakedb";

export const productsAndCart = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const savedCart = getStoredCart();
    const initialCart = []
    // console.log( ' savedCart',savedCart);
    // console.log(products);
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }


    return {products: products, initialCart: initialCart};
}