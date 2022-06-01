export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number, // optinal parameters at the end
) => {
  return {
    id,
    // stock: stock || 10,
    // isNew: isNew || true
    stock: stock ?? 10, // nullish coalescing operator
    isNew: isNew ?? true // nullish coalescing operator
  }
}

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(2, true);
console.log(p2);

const p3 = createProduct(3);
console.log(p3);

//    0   === false
//    ''  === false
//  false === false

const p4 = createProduct(2, false, 0);
console.log(p4);
