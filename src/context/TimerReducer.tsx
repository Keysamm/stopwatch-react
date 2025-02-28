import { TimerState } from './TimerContext';

export type TimerAction =
  | { type: 'START' }
  | { type: 'STOP' }
  | { type: 'RESET' }
  | { type: 'LAP' }
  | { type: 'TICK'; payload: number };

export const timerReducer = (
  state: TimerState,
  action: TimerAction
): TimerState => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        isRunning: true,
        startTime: performance.now() - state.timePassed,
      };
    case 'STOP':
      return { ...state, isRunning: false };
    case 'RESET':
      return { startTime: null, timePassed: 0, isRunning: false, laps: [] };
    case 'LAP':
      return { ...state, laps: [...state.laps, state.timePassed] };
    case 'TICK':
      return state.isRunning
        ? { ...state, timePassed: action.payload - (state.startTime || 0) }
        : state;
    default:
      return state;
  }
};
