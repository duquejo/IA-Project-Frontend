import React from 'react';
import { HeartIcon, StarIcon } from '@heroicons/react/outline';
import { useAppSelector } from '../../../../hooks';
import { selectGame } from '../../../../reducers/game/storageGame';

export const User = (): JSX.Element | null => {

  const { lifes, level } = useAppSelector( selectGame );

  return (
    <div className="md:bg-gray-50 p-1 md:py-2 md:px-0 flex self-center items-center absolute shadow-xs bottom-0 right-2">
      <div className="flex flex-col">
        <div className="inline-flex items-center cursor-pointer mb-2" title="Current lifes">
          <HeartIcon className={ `h-6 w-6 md:h-7 md:w-7 fill-red-500 stroke-transparent mr-1 ${ lifes ===1 ? 'animate-pulse' : '' }` }/><span className="font-bold">{ lifes }</span>
        </div>
        <div className="inline-flex items-center cursor-pointer" title="Current level">
          <StarIcon className="h-6 w-6 md:h-7 md:w-7 fill-yellow-500 stroke-transparent mr-1"/><span className="font-bold">{ level }</span>
        </div>
      </div>     
    </div>     
  )
}
