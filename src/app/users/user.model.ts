import { BaseModel } from '../base.model';

enum Roles {
  Admin = "ADMIN",
  Seller = "SELLER",
  Customer = "CUSTOMER",
}

interface User extends BaseModel {
  username: string;
  role: Roles;
}

export {
  User,
  Roles,
}
