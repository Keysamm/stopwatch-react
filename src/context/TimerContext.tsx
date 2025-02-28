import { createContext } from 'react';

export type TimerState = {
  startTime: number | null;
  timePassed: number;
  isRunning: boolean;
  laps: number[];
};

export const TimerContext = createContext<{
  state: TimerState;
  start: () => void;
  stop: () => void;
  reset: () => void;
  lap: () => void;
} | null>(null);
