import React, { useEffect, useState } from 'react';

import pole1 from '../../../svg/hangman/0.svg';
import pole2 from '../../../svg/hangman/1.svg';
import pole3 from '../../../svg/hangman/2.svg';

// Body imports
import head from '../../../svg/hangman/7.svg';
import torso from '../../../svg/hangman/8.svg';
import l_leg from '../../../svg/hangman/9.svg';
import r_leg from '../../../svg/hangman/10.svg';
import l_arm from '../../../svg/hangman/11.svg';
import r_arm from '../../../svg/hangman/12.svg';

interface IHangman {
  src: string;
  visible: boolean;
}

export const Hangman = (): JSX.Element | null => {

  let characterParts: Array<any> = [];
  const [characterBody, setCharacterBody ] = useState<Array<IHangman>>([]);

  useEffect(() => {
    characterParts = [ head, torso, l_leg, r_leg, l_arm, r_arm ];
    setCharacterBody( () => 
      characterParts.map( ( part: string ) => ({
          src: part,
          visible: false
      }))
    );
  }, []);
  
  return (
    <div id="hangman" className="relative h-[300px] w-[300px] col-span-2 m-auto">

      {/* Pole */}
      <img className="pole absolute" src={ pole1 } />
      <img className="pole absolute" src={ pole2 } />
      <img className="pole absolute" src={ pole3 } />

      {/* Hangman */}
      {
        characterBody.map( ( part: IHangman, index: number ) => (
          <img key={ index } className={ `${ index } absolute` } src={ part.src } />
        ))
      }
    </div>
  )
}
