import { faker } from '@faker-js/faker';

import { products, addProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    price: parseFloat(faker.commerce.price()),
    stock: faker.datatype.number({min: 10, max: 100}),
    isNew: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  });
}

console.log(products);
