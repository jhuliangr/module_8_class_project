import { useState } from 'react';
import { Guesses } from './Guesses';
import { Keyboard } from './Keyboard';

const App: React.FC = () => {
  const [pos, setPos] = useState<number>(0);
  return (
    <div className="max-w-screen overflow-x-auto">
      <h1 className="text-center">Wordlish</h1>
      <Keyboard word="hello" pos={pos}>
        <Guesses />
      </Keyboard>
    </div>
  );
};

export default App;
