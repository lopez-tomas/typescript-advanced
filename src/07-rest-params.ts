import { User, Roles } from './01-enums';

const currentUser: User = {
  username: 'admin',
  role: Roles.Customer
}

export const checkAdminRole = () => {
  return currentUser.role === Roles.Admin;
}

const rta = checkAdminRole();
console.log('checkAdminRole:\t', rta);

// version1
export const checkRole = (role1: string, role2: string) => {
  return currentUser.role === role1 || currentUser.role === role2;
}

const rta2 = checkRole(Roles.Admin, Roles.Seller);
console.log('checkRole:\t', rta2);

// version2
export const checkRoleV2 = (roles: string[]) => {
  return roles.includes(currentUser.role);
}

const rta3 = checkRoleV2([Roles.Admin, Roles.Seller]);
console.log('checkRoleV2:\t', rta3);

// version3
export const checkRoleV3 = (...roles: string[]) => {
  return roles.includes(currentUser.role);
}

const rta4 = checkRoleV3(Roles.Admin, Roles.Seller, Roles.Customer);
console.log('checkRoleV3:\t', rta4);
