// Nico       => [N,i,c,o]  | string   => string[]
// [N,i,c,o]  => Nico  | string[] => string

export function parseString(input: string): string[];
export function parseString(input: string[]): string;
export function parseString(input: number): boolean;

// function parseString(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }

export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if(typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const resArray = parseString('Nico');
resArray.reverse();
console.log('resArray:', 'Nico =>', resArray);

const resString = parseString(['N', 'i', 'c', 'o']);
resString.toUpperCase();
console.log('resString:', "['N', 'i', 'c', 'o'] =>", resString);

const resBoolean = parseString(12);
console.log('resBoolean:', `${12} =>`, resBoolean)
