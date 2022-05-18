import React, { useEffect, useState } from 'react';

import pole1 from '../../../../svg/hangman/0.svg';
import pole2 from '../../../../svg/hangman/1.svg';
import pole3 from '../../../../svg/hangman/2.svg';

// Body imports
import head from '../../../../svg/hangman/7.svg';
import torso from '../../../../svg/hangman/8.svg';
import l_leg from '../../../../svg/hangman/9.svg';
import r_leg from '../../../../svg/hangman/10.svg';
import l_arm from '../../../../svg/hangman/11.svg';
import r_arm from '../../../../svg/hangman/12.svg';

// Redux
import { useAppSelector } from '../../../../hooks/index';
import { selectGame } from '../../../../reducers/game/storageGame';

interface IHangman {
  src: string;
  visible: boolean;
}

export const Hangman = (): JSX.Element | null => {

  const gameState = useAppSelector( selectGame );
  const [characterBody, setCharacterBody ] = useState<Array<IHangman>>([]);
  const [attempts, setAttempts] = useState<number>(0);

  useEffect(() => {

    const characterParts = [ r_arm, l_arm, r_leg, l_leg, torso, head ];
    let visibleParts = new Array( characterParts.length ).fill( true );

    if( attempts > 0 ) {
      visibleParts = visibleParts.map( ( _,index: number ) => {
        return index < attempts ? false : true;
      });
    }
    
    setCharacterBody( () => 
      characterParts.map( ( part: string, index: number ) => ({
          src: part,
          visible: visibleParts[index]
      }))
    );

    setAttempts( gameState.attempt );
  }, [gameState.attempt, attempts]);
  
  return (
    <div id="hangman" className="relative h-[300px] w-[300px] col-span-2 m-auto">

      {/* Pole */}
      <img className="pole absolute" src={ pole1 } />
      <img className="pole absolute" src={ pole2 } />
      <img className="pole absolute" src={ pole3 } />

      {/* Hangman */}
      {
        characterBody.map( ( part: IHangman, index: number ) => (
          <img key={ index } 
               className={ `${ index } absolute ${ part.visible ? 'visible' : 'hidden' }` }
               src={ part.src } />
        ))
      }
    </div>
  )
}
