const faker = require("faker");
const database = { products: [] };

// Create fifthy(50) products
for (let i = 1; i <= 50; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?food",
        quantity: faker.datatype.number(),
    });
}

console.log(JSON.stringify(database, undefined, 2));
