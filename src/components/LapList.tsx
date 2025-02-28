import React from 'react';
import { formatTime } from '../utils/formatTime';

export const LapList: React.FC<{ laps: number[] }> = ({ laps }) => {
  return (
    <ul>
      {laps.map((lap, index) => (
        <li key={index}>
          Lap {index + 1}: {formatTime(lap)}
        </li>
      ))}
    </ul>
  );
};
