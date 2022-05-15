

export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

interface ActionIncrement {
  type: typeof ActionTypes.INCREMENT;
}

interface ActionDecrement {
  type: typeof ActionTypes.DECREMENT;
}

export type ActionTypesStorage = 
  | ActionIncrement
  | ActionDecrement;

/**
 * Action
 * @returns Increment
 */
export function increment(): ActionTypesStorage {
  return {
    type: ActionTypes.INCREMENT
  };
}