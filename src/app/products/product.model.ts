import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel {
  title: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  stock: number;
  size?: Sizes;
  color: string;
  isNew: boolean;
  tags: string[];
}

export {
  Product,
  Sizes
}
