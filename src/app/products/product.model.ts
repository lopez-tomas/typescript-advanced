import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel {
  title: string;
  category: Category;
  price: number;
  stock: number;
  isNew: boolean;
  image: string;
  description: string;
  tags: string[];
  size?: Sizes;
  color?: string;
}

export {
  Product,
  Sizes
}
