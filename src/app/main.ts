import { addProduct } from './products/product.service';

addProduct({
  id: '1',
  title: 'product test',
  category: {
    id: '12',
    name: 'category test',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  stock: 90,
  createdAt: new Date(),
  updatedAt: new Date(),
});
