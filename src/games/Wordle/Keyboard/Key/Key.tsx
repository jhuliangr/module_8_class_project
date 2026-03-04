import { useRef, useState } from 'react';
import { simulateKeyDown } from './utils';

interface Props {
  letter: string;
  className: string;
}

export const Key: React.FC<Props> = ({ letter, className }) => {
  const changed = useRef<boolean>(false);
  const [style, setStyle] = useState(className);
  if (
    !changed.current &&
    (className.includes('correct') || className.includes('exist'))
  ) {
    changed.current = true;
    setStyle(className);
  }
  return (
    <button className={style} onClick={() => simulateKeyDown(letter)}>
      {letter}
    </button>
  );
};
