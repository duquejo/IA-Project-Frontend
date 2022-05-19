import React, { FC, useState, useEffect } from 'react';

// Redux
import { useAppSelector } from '../../../../hooks/index';
import { selectGame } from '../../../../reducers/game/storageGame';

type BuilderProps = {
    word: string
};

export const Letters: FC<BuilderProps> = ({ word }): JSX.Element | null => {

  const splittedWord: Array<string> = word.split('');

  const gameState = useAppSelector( selectGame );

  const [letters, setLetters] = useState<Array<string>>(() => {
    return new Array( splittedWord.length ).fill('_');
  });

  useEffect(() => {
      const exists = splittedWord.some( letter => gameState.usedLetters.includes( letter ));
      if( exists ) {
        setLetters( () => splittedWord.map( letter => gameState.usedLetters.includes( letter ) ? letter : '_' ));
      }
  }, [gameState.usedLetters]);
  
  /**
   * @TODO Separar lógica del timer de la del juego
   * @TODO borrar tablero después de cada envío 
   */

  return (
    <div className="h-24 pb-6 pt-3 px-3 flex items-end gap-2">
    {
      !! letters.length && letters.map(( letter: string, index: number ) => (
        <div key={ `letter-${ index }`} className="letter">
          { letter }
        </div>
      ))
    }
    </div>
  )
};
