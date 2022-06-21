import React from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/outline';
import { useAppSelector } from '../../../../hooks';
import { selectGame } from '../../../../reducers/game/storageGame';

export const User = (): JSX.Element | null => {

  const { lifes, level } = useAppSelector( selectGame );

  return (
    <div className="bg-gray-50 h-auto p-2 rounded-tr-xl rounded-br-xl flex self-center items-center">

      <div className="flex flex-col">
        <div className="inline-flex items-center cursor-pointer mb-2" title="Current lifes">
          <HeartIcon className={ `h-7 w-7 fill-red-500 stroke-transparent mr-1 ${ lifes ===1 ? 'animate-pulse' : '' }` }/><span className="font-bold">{ lifes }</span>
        </div>
        <div className="inline-flex items-center cursor-pointer" title="Current level">
          <StarIcon className="h-7 w-7 fill-yellow-500 stroke-transparent mr-1"/><span className="font-bold">{ level }</span>
        </div>
      </div>     

    </div>     
  )
}
