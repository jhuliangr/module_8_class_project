import { Guesses } from './Guesses';
import { Keyboard } from './Keyboard';

const App: React.FC = () => {
  return (
    <div>
      <h1 className='text-center'>Wordlish</h1>
      <Keyboard>
        <Guesses />
      </Keyboard>
    </div>
  );
};

export default App;
