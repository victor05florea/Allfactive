import { Product } from "../types/product.types";

const fetchProducts = async (): Promise<Product[]> => {
    let response= await fetch('https://fakestoreapi.com/products');
    if(!response.ok)
        throw new Error('Eroare la fetch-produse');

    const data: Product[] = await response.json();
    return data;
}

const fetchProductById = async (id: number): Promise<Product> => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if(!response.ok)
        throw new Error('Eroare la fetch-produsid');

    const data: Product = await response.json();
    return data;
}

const fetchCategories = async (): Promise<string[]> => {
    let response = await fetch('https://fakestoreapi.com/products/categories');
    if(!response.ok)
        throw new Error('Eroare la fetch-categorii');

    const data: string[] = await response.json();
    return data;
}

export { fetchProducts, fetchProductById, fetchCategories };