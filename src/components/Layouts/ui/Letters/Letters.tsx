import React, { FC, useState, useEffect } from 'react';

// Redux
import { useAppSelector } from '../../../../hooks/index';
import { selectGame } from '../../../../reducers/game/storageGame';

export const Letters: FC = (): JSX.Element | null => {
  
  const gameState = useAppSelector( selectGame );
  const [letters, setLetters] = useState<Array<string>>([]);

  useEffect(() => {
    if( gameState.challenge ) {
      const splittedWord: Array<string> = gameState.challenge.split('');
      setLetters(() => {
        return new Array( splittedWord.length ).fill('_');
      });

      const isValid = splittedWord.some( letter => gameState.usedLetters.includes( letter ));
      if( isValid ) {
        setLetters( () => splittedWord.map( letter => gameState.usedLetters.includes( letter ) ? letter : '_' ));
      }
    }
  }, [gameState.challenge, gameState.usedLetters]);

  return (
    <div className="h-16 sm:h-24 pb-3 pt-3 px-3 flex items-end gap-2">
    {
      !! letters.length && letters.map(( letter: string, index: number ) => (
        <div key={ `letter-${ index }`} className="letter">{ letter }</div>
      ))
    }
    </div>
  )
};
