
interface ProductsStorage {
    saveProduct(product:Product): void;
    getProductById(id: UniqueId): Product;
}