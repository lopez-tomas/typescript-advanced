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

let searchProduct = getProduct('id-test');
let searchProduct2 = getProduct('5bedbb0d-e92e-4681-8711-a38a22ba0c91');
console.log('\n\nsearchProduct:\n', searchProduct);
console.log('\nsearchProduct2:\n', searchProduct2);

const editProduct = updateProduct('id-test', {
  title: 'New title',
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
  updatedAt: new Date()
});
console.log('\n\neditProduct:\n', editProduct);

const editProduct2 = updateProduct('5bedbb0d-e92e-4681-8711-a38a22ba0c91', {
  title: 'New title 2',
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
  updatedAt: new Date()
});
console.log('\n\neditProduct2:\n', editProduct2);

const removedProduct = deleteProduct('id-test');
const removedProduct2 = deleteProduct('5bedbb0d-e92e-4681-8711-a38a22ba0c91');
console.log('\n\nremovedProduct:\n', removedProduct);
console.log('\n\nremovedProduct2:\n', removedProduct2);

searchProduct = getProduct('id-test');
searchProduct2 = getProduct('5bedbb0d-e92e-4681-8711-a38a22ba0c91');
console.log('\n\nsearchProduct:\n', searchProduct);
console.log('\nsearchProduct2:\n', searchProduct2);
