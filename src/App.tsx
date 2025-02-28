import { Stopwatch } from './components/Stopwatch';
import { TimerProvider } from './context/TimerProvider';

function App() {
  return (
    <TimerProvider>
      <Stopwatch />
    </TimerProvider>
  );
}

export default App;
