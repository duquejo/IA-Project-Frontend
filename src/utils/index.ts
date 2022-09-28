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

export const getRandomTrick = (): string => {
  const tricks = [
    'Get ready for the next challenge!.',
    'Start with the most common letters, like vowels, or some consonants as R, S, T, L or N.',
    'Strategically pick your first vowels based on word length.',
    'Be gentle with your AI partner, draw legible uppercase letters',
    'A longer word doesn\'t mean that it will be hard, be patient and think first about it', 
    'You have 6 attempts in total and 3 lifes.'
  ];
  return tricks[ Math.floor(Math.random() * tricks.length) ];
}

interface IFetchRecognitionResponse {
  data: IFetchRecognitionData;
  message: string;
}

interface IFetchRecognitionData {
  recognized: boolean;
  letter: string;
}

export const fetchRecognition = async ( image: string ): Promise<IFetchRecognitionResponse> => {
  const request = await fetch( 'http://localhost:8000/recognize', {
    method: 'POST',
    body: JSON.stringify({ data: image })
  });
  return await request.json();
}