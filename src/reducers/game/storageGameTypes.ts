/**
 * 
 * Game Store types
 */
export interface GameState {
    level: number;
    challenge: string | null;
    usedLetters: Array<string>;
    lifes: number;
    attempt: number;
}