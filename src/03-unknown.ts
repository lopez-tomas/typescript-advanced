// # any example # /

// let anyVar: any;
// anyVar = true;
// anyVar = undefined;
// anyVar = null;
// anyVar = 1;
// anyVar = [];
// anyVar = {};

// let isNew: boolean = anyVar;

// anyVar.doSomething();
// anyVar.toUpperCase();

// # unknown type # //
let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

// unknownVar.doSomething();
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

let isNewV2: boolean;
if (typeof unknownVar === 'boolean'){
  isNewV2 = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
