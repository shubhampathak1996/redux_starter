import React from 'react';
import { useAppSelector } from '../redux/hooks';

const MyComponent: React.FC = () => {
  const count = useAppSelector((s) => s.counter);
  return <div>MyComponent:{count}</div>;
};

export default MyComponent;
