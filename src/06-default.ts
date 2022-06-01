export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 0
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(2, true);
console.log(p2);

const p3 = createProduct(3);
console.log(p3);

//    0   == false
//    ''  == false
//  false === false

const p4 = createProduct(4, false, 0);
console.log(p4);

const p5 = createProduct(5, false, 100);
console.log(p5);
