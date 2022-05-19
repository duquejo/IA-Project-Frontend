/**
 * 
 * Game Store types
 */

export enum TimerValues {
    ACTIVE = 'ACTIVE',
    PAUSED = 'PAUSED',
}

export interface TimerState {
    timer: TimerValues;
}