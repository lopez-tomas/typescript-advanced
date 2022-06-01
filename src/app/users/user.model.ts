enum Roles {
  Admin = "ADMIN",
  Seller = "SELLER",
  Customer = "CUSTOMER",
}

interface User {
  id: string | number;
  username: string;
  role: Roles;
}

export {
  User,
  Roles,
}
