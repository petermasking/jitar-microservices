
import { Delivery } from './Delivery.js';

export async function planDelivery(address: string): Promise<Delivery>
{
    const today = new Date();
    const tomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);

    return new Delivery(address, tomorrow);
}
