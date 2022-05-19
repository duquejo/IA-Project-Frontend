import React, { useEffect, useState } from 'react';


{/* https://boxy-svg.com/app/disk:tGMnFlCFCi */}

// Pole imports
import pole from '../../../../svg/hangman/pole.svg';

// Body imports
import l_leg from '../../../../svg/hangman/l_leg.svg';
import r_leg from '../../../../svg/hangman/r_leg.svg';
import l_arm from '../../../../svg/hangman/l_arm.svg';
import r_arm from '../../../../svg/hangman/r_arm.svg';
import head from '../../../../svg/hangman/head.svg';
import torso from '../../../../svg/hangman/torso.svg';

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

    const characterParts = [ head, torso, r_arm, l_arm, r_leg, l_leg  ];
    let visibleParts = new Array( characterParts.length ).fill( false );

    if( attempts > 0 ) {
      visibleParts = visibleParts.map( ( _,index: number ) => index < attempts ? true : false );
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
      <img className="pole absolute" src={ pole } />

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
