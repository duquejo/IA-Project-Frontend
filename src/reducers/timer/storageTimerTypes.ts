/**
 * 
 * Game Store types
 */

export enum TimerValues {
    ACTIVE = 'ACTIVE',
    PAUSED = 'PAUSED',
    RESET = 'RESET',
}

export interface TimerState {
    timer: TimerValues;
}