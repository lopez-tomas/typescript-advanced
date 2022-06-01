// Nico       => [N,i,c,o]  | string   => string[]
// [N,i,c,o]  => Nico  | string[] => string

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const resArray = parseString('Nico');
console.log('resArray:', 'Nico =>', resArray);

const resString = parseString(['N', 'i', 'c', 'o']);
console.log('resString:', "['N', 'i', 'c', 'o'] =>", resString);
