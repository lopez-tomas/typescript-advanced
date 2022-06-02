import { faker } from '@faker-js/faker';

import { products, addProduct, getProduct, updateProduct, deleteProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    categoryId: faker.datatype.uuid(),
    price: parseFloat(faker.commerce.price()),
    stock: faker.datatype.number({min: 10, max: 100}),
    isNew: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
  });
}

console.log(products);
let product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

