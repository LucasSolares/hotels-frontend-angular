export class Hotel {

    id: string;
    name: string;
    description: string;
    price: number;
    tags: string[] = [];

    constructor(name: string, description: string, price: number, id?: string, tags?: string[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.tags = tags || [];
    }

    static getFromJSON(json: any): Hotel {
        return new Hotel(json.name, json.price, json.description, json.tags);
    }

}
