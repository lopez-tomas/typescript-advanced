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

// # Good practices # //
/*
  - If we have an unknown | any type in a function overloading, theese must be declared at the end to avoid problems.

  - If we have a function overloading that always returns a number (for example) and the only difference is the number
  of parameters... do we really need an overloading? Or could just be a function with optional parameters? Let's avoid
  unnecessary overloadings.

  - If we have three function overloadings:
    1. Receives no parameters => returns a number;
    2. Receives a number      => returns a Moment;
    3. Receives a string      => returns a Moment;

  We don't need 3 overloadings, we could just use 2:
    1. Receives no parameters     => returns a number
    2. Receives a number | string => returns a Moment;

  There is no need to create two separate overloadings that returns the same type.
*/
