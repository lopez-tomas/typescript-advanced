import { User } from '../users/user.model';
import { Product } from '../products/product.model';

interface Order {
  id: string | number;
  user: User;
  products: Product[];
  createdAt: Date;
}
