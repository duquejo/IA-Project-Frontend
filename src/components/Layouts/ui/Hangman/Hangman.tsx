import React, { useEffect, useRef, useState } from 'react';


// https://boxy-svg.com/app/disk:tGMnFlCFCi
// http://svgsplit.com/

// Pole imports
import pole from '../../../../svg/hangman/pole.svg';
import rope from '../../../../svg/hangman/rope.svg';

// Body imports
import l_leg from '../../../../svg/hangman/l_leg.svg';
import r_leg from '../../../../svg/hangman/r_leg.svg';
import l_arm from '../../../../svg/hangman/l_arm.svg';
import r_arm from '../../../../svg/hangman/r_arm.svg';
import head from '../../../../svg/hangman/head.svg';
import torso from '../../../../svg/hangman/torso.svg';

// Redux
import { useAppDispatch, useAppSelector } from '../../../../hooks/index';
import { selectGame } from '../../../../reducers/game/storageGame';
import { stop } from '../../../../reducers/timer/storageTimer';

interface IHangman {
  src: string;
  visible: boolean;
  animation: string;
}

export const hangmanConfig = {
  characterParts: [ head, torso, r_arm, l_arm, r_leg, l_leg, rope  ],
  characterPartsAnimation : [
    'animate-wiggle', // Head
    'drop animate-wiggle-soft', // Torso
    'drop animate-wiggle-hard', // Right arm
    'drop animate-wiggle-hard', // Left arm
    'drop animate-wiggle-soft', // Right leg
    'drop animate-wiggle-soft', // Left leg
    'animate-slide-l-r', // Rope
  ],
};

export const Hangman = (): JSX.Element | null => {

  let visibleParts = new Array( hangmanConfig.characterParts.length ).fill( false );

  const gameState = useAppSelector( selectGame );

  const dispatch = useAppDispatch();

  const [characterBody, setCharacterBody ] = useState<Array<IHangman>>([]);
  const [attempts, setAttempts] = useState<number>(0);

  const hangmanContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {

    /**
     * First attempt
     */
    if( attempts == 0 ) {
      hangmanContainer.current?.classList.remove('dead');
    }

    /**
     * Parts reveal
     */
    if( attempts > 0 ) {
      visibleParts = visibleParts.map( ( _,index: number ) => index < attempts ? true : false );
    }

    /**
     * Dead
     */
    if( attempts > hangmanConfig.characterParts.length - 1 ) {
      dispatch( stop() );
      hangmanContainer.current?.classList.add('dead');
    }
    
    setCharacterBody( () => 
      hangmanConfig.characterParts.map( ( part: string, index: number ) => ({
          src: part,
          visible: visibleParts[index],
          animation: hangmanConfig.characterPartsAnimation[index],
      }))
    );

    setAttempts( gameState.attempt );

  }, [gameState.attempt, attempts]);
  
  return (
    <div className="hangman-container overflow-hidden relative h-[300px] w-[300px] col-span-2 m-auto">
      <div id="hangman" ref={ hangmanContainer }>

        {/* Pole */}
        <img className="pole absolute" src={ pole } />

        {/* Hangman */}
        {
          characterBody.map( ( part: IHangman, index: number ) => (
            <img key={ index } 
                className={ `${ index } absolute ${ part.visible ? 'visible' : 'hidden' } ${ part.animation }` }
                src={ part.src } />
          ))
        }
      </div>
    </div>
  )
}
