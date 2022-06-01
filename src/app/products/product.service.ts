import { Product, ProductEdit } from './product.model';

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

const deleteProduct = (id: string) => {
  // code
}

export {
  products,
  addProduct,
  getProduct,
  updateProduct,
}
