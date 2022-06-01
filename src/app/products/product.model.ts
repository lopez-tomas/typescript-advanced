import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel {
  title: string;
  category: Category;
  stock: number;
  size?: Sizes;
}

export {
  Product,
  Sizes
}
