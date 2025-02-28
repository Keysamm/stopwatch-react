import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import { TimerContext, TimerState } from './TimerContext';
import { timerReducer } from './TimerReducer';

const initialState: TimerState = {
  startTime: null,
  timePassed: 0,
  isRunning: false,
  laps: [],
};

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);
  const frameRef = useRef<number | null>(null);

  const updateTimer = useCallback(() => {
    if (state.isRunning) {
      dispatch({ type: 'TICK', payload: performance.now() });
      frameRef.current = requestAnimationFrame(updateTimer);
    }
  }, [state.isRunning]);

  useEffect(() => {
    if (state.isRunning) {
      frameRef.current = requestAnimationFrame(updateTimer);
      console.log('frameRef.current', frameRef.current);
    } else if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [state.isRunning, updateTimer]);

  const start = useCallback(() => dispatch({ type: 'START' }), []);
  const stop = useCallback(() => dispatch({ type: 'STOP' }), []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
  const lap = useCallback(() => dispatch({ type: 'LAP' }), []);

  return (
    <TimerContext.Provider value={{ state, start, stop, reset, lap }}>
      {children}
    </TimerContext.Provider>
  );
};
