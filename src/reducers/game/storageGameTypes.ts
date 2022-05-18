/**
 * 
 * Game Store types
 */

export enum TimerStates {
    ACTIVE = 'ACTIVE',
    PAUSED = 'PAUSED',
}

export interface GameState {
    level: number;
    challenge: string | null;
    usedLetters: Array<string>;
    timer: TimerStates;
    lifes: number;
    attempt: number;
}