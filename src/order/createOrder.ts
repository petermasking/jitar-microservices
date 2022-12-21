
import { Product } from '../product/Product.js';
import { Order } from './Order.js';

export async function createOrder(products: Product[]): Promise<Order>
{
    const id = Math.floor(Math.random() * 1000);

    return new Order(id, products);
}
