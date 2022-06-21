/**
 * 
 * Game Store types
 */

export enum ModalStatuses {
    WIN = 'WIN',
    LOSE = 'LOSE',
    GAMEOVER = 'GAMEOVER',
}
export interface GameState {
    level: number;
    challenge: string | null;
    usedLetters: Array<string>;
    lifes: number;
    attempt: number;
    modalStatus: ModalStatuses;
}