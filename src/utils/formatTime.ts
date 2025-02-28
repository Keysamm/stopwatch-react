// export const formatTime = (ms: number) =>
//   new Date(ms).toISOString().substring(14, 22);

// const formatTime1 = (ms: number) => {
//   const minutes = Math.floor(ms / 60000);
//   const seconds = Math.floor((ms % 60000) / 1000);
//   const centiseconds = Math.floor((ms % 1000) / 10);

//   return (
//     [minutes, seconds].map((num) => num.toString().padStart(2, '0')).join(':') +
//     `.${centiseconds.toString().padStart(2, '0')}`
//   );
// };

// const MS_PER_SECOND = 1000; // 1 секунда = 1000 мс
// const MS_PER_MINUTE = 60 * MS_PER_SECOND; // 1 хвилина = 60000 мс
// const MS_PER_CENTISECOND = 10; // 1 сотина секунди = 10 мс

//   const minutes = Math.floor(ms / MS_PER_MINUTE);
//   const seconds = Math.floor((ms % MS_PER_MINUTE) / MS_PER_SECOND);
//   const centiseconds = Math.floor((ms % MS_PER_SECOND) / MS_PER_CENTISECOND);

export const formatTime = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  console.log('minutes', minutes);
  const seconds = Math.floor((ms % 60000) / 1000);
  const centiseconds = Math.floor((ms % 1000) / 10); // Соті секунди

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}.${String(centiseconds).padStart(2, '0')}`;
};
