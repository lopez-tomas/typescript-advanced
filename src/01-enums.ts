enum Roles {
  Admin = "admin",
  Seller = "seller",
  Customer = "customer",
}

type User = {
  username: string;
  role: Roles;
}

const newUser: User = {
  username: 'admin',
  role: Roles.Admin
}

console.log(newUser);
