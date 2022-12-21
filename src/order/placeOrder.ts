
import { planDelivery } from '../delivery/planDelivery.js';
import { updateStock } from '../inventory/updateStock.js';
import { getProducts } from '../product/getProducts.js';
import { createOrder } from './createOrder.js';

export async function placeOrder(productIds: string[], address: string): Promise<string>
{
    const products = await getProducts(productIds);
    await updateStock(productIds);

    const order = await createOrder(products);
    const delivery = await planDelivery(address);

    return `Your order #${order.id} with ${order.productCount} products `
+ `will be delivered to "${delivery.address}" on ${delivery.dateString}`;
}
