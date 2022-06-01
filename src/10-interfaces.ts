type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

interface Product {
  id: string;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'product test',
  createdAt: new Date(),
  stock: 90
})

const addProduct = (data: Product) => {
  products.push(data);
}
