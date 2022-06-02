import { faker } from '@faker-js/faker';

import { Product, ProductEdit } from './product.model';
import { CreateProductDto } from './product.dto';

let products: Product[] = [];


const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }

  products.push(newProduct);
  return newProduct;
}

// getProduct overloading
function getProduct(id: string): Product;
function getProduct(id: string): string;

function getProduct(id: string): unknown {
  const product = products.find(product => product.id === id);

  return product ?? `Product with ID '${id}' does not exist.`;
}

// updateProduct overloading
function updateProduct(id: string, changes: ProductEdit): Product;
function updateProduct(id: string, changes: ProductEdit): string;

function updateProduct(id: string, changes: ProductEdit):unknown {
  const product = getProduct(id);

  if (product) {
    products.map(product => {
      product.id === id && Object.assign(product, changes);
    });
  }

  return product;
}

// deleteProduct overloading
function deleteProduct(id: string):Product;
function deleteProduct(id: string):string;

function deleteProduct(id: string):unknown {
  const product = getProduct(id);

  if (product) {
    products = products.filter(product => product.id !== id);
  }

  return product;
}

export {
  products,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
}
