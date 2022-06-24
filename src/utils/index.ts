// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 1000 )
    );
}

export const getRandomLetter = (): string => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export const setChallenge = ( level: number ) => {
  let wordsSet;

  const words1: Array<string> = [
    'burn',
    'work',
    'lean',
    'borrow',
    'car',
    'owl',
    'pig',
    'test',
    'wood',
    'wool',
  ];  

  const words2: Array<string> = [
    'damaged',
    'better',
    'father',
    'modern',
    'comfort',
    'phone',
    'tower',
    'xilophone',
    'trustee',
    'voucher',
  ];

  const words3: Array<string> = [ 
    'stunning', 
    'knowledge', 
    'paralyzing', 
    'maintenance',
    'relationship',
    'friendship',
    'availability',
  ];
  
  if( level <= 5 ) {
    wordsSet = words1;
  } else if ( level > 5 && level <= 10 ) {
    wordsSet = words2;
  } else {
    wordsSet = words3;
  }
  return wordsSet[ Math.floor(Math.random() * wordsSet.length) ].toLocaleUpperCase();
};