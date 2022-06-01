import { faker } from '@faker-js/faker';

import { products, addProduct, getProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
  addProduct({
    id: i === 0 ? 'id-test' : faker.datatype.uuid(),
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

const searchProduct = getProduct('id-test');
const searchProduct2 = getProduct('5bedbb0d-e92e-4681-8711-a38a22ba0c91');
console.log('searchProduct:', searchProduct);
console.log('searchProduct2:', searchProduct2);
