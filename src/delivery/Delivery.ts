
export class Delivery
{
    #address: string;
    #date: Date;

    constructor(address: string, date: Date)
    {
        this.#address = address;
        this.#date = date;
    }

    get address(): string { return this.#address; }

    get date(): Date { return this.#date; }

    get dateString(): string { return this.#date.toDateString(); }
}
