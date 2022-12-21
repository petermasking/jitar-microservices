
import { Product } from "./Product.js";

const products =
[
    new Product("1", "Product 1"),
    new Product("2", "Product 2"),
    new Product("3", "Product 3"),
    new Product("4", "Product 4"),
    new Product("5", "Product 5")
]

export async function getProducts(productIds: string[]): Promise<Product[]>
{
    return products.filter(product => productIds.includes(product.id));
}
