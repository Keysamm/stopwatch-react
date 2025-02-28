import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import { LapList } from './LapList';
import { formatTime } from '../utils/formatTime';

export const Stopwatch: React.FC = () => {
  const timer = useContext(TimerContext);
  if (!timer) {
    throw new Error('Stopwatch must be used within a TimerProvider');
  }

  const { state, start, stop, reset, lap } = timer;
  return (
    <div>
      <h1>{formatTime(state.timePassed)}</h1>
      <button onClick={state.isRunning ? stop : start}>
        {state.isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={lap} disabled={!state.isRunning}>
        Lap
      </button>
      <button onClick={reset}>Reset</button>
      <LapList laps={state.laps} />
    </div>
  );
};
