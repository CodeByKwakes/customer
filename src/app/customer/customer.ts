export class Customer {
    id: string;
    name: CustomerName;
    email: string;

    static create(data) {
        return new Customer(data);
    }

    constructor(data) {
        this.id = data._id;
        this.email = data.email;
        this.name = data.name;
    }
}

interface CustomerName {
  first: string;
  last: string;
}