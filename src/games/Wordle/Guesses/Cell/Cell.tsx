import type { Cell as CellType } from './types';

export const CellComponent: React.FC<CellType> = ({ letter, state }) => {
  return <div className={`box ${state}`}>{letter ? ' ' : letter}</div>;
};
