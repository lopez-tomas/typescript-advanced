import { Product } from './product.model';

const products: Product[] = [];


const addProduct = (data: Product) => {
  // data.id = 'fjksdjfkaskf'; // readonly
  // data.createdAt = new Date(1998, 6, 8); // readonly
  products.push(data);
}

// getProduct overloading
function getProduct(id: string): Product;
function getProduct(id: string): string;

function getProduct(id: string): unknown {
  const product = products.find(product => product.id === id);

  return product ?? `Product with ID ${id} does not exist.`;
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
  getProduct,
}
