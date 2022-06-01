import { BaseModel } from '../base.model';
import { User } from '../users/user.model';
import { Product } from '../products/product.model';

interface Order extends BaseModel{
  user: User;
  products: Product[];
}

export {
  Order,
}
