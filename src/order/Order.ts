
import { Product } from '../product/Product.js';

export class Order
{
    #id: number;
    #products: Product[];

    constructor(id: number, products: Product[])
    {
        this.#id = id;
        this.#products = products;
    }

    get id(): number { return this.#id; }

    get products(): Product[] { return this.#products; }

    get productCount(): number { return this.#products.length; }
}
