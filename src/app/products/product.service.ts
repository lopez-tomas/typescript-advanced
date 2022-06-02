import { faker } from '@faker-js/faker';

import { Product, ProductEdit } from './product.model';
import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';

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
function getProduct(id: Product['id']): Product;
function getProduct(id: Product['id']): string;

function getProduct(id: Product['id']): unknown {
  const product = products.find(product => product.id === id);

  return product ?? `Product with ID '${id}' does not exist.`;
}

// updateProduct overloading
function updateProduct(id: Product['id'], changes: UpdateProductDto): Product;
function updateProduct(id: Product['id'], changes: UpdateProductDto): string;

function updateProduct(id: Product['id'], changes: UpdateProductDto): unknown {
  const index = products.findIndex(product => product.id === id);

  if (index) {
    const prevData = products[index];
    products[index] = {
      ...prevData,
      ...changes
    }
  }

  return index ? products[index] : `Product with ID '${id}' does not exist.`;
}

// deleteProduct overloading
function deleteProduct(id: Product['id']): Product;
function deleteProduct(id: Product['id']): string;

function deleteProduct(id: Product['id']): unknown {
  const product = getProduct(id);

  if (product) {
    products = products.filter(product => product.id !== id);
  }

  return product;
}

const findProducts = (dto: FindProductDto): Product[] => {
  const productsFound = products.filter(product => {
    let flag: boolean = false;
    for (const property in dto) {
      flag = product[property as keyof Product] === dto[property as keyof FindProductDto];
    }

    if (flag) {
      return product;
    }
  })

  return productsFound;
}


export {
  products,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  findProducts,
}
