import { Product } from './product.model';

const products: Product[] = [];

const addProduct = (data: Product) => {
  // data.id = 'fjksdjfkaskf'; // readonly
  // data.createdAt = new Date(1998, 6, 8); // readonly
  products.push(data);
}

export {
  products,
  addProduct,
}
