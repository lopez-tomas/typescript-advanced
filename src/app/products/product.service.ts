import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: Product) => {
  // data.id = 'fjksdjfkaskf'; // readonly
  // data.createdAt = new Date(1998, 6, 8); // readonly
  products.push(data);
}

const getProduct = (id: string): Product => {
  // code
}

const updateProduct = (id: string, changes: Product) => {
  // code
}

const deleteProduct = (id: string) => {
  // code
}

export {
  products,
  addProduct,
}
