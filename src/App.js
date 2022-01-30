import { useState } from 'react';
import './App.css';
import ElementsList from './components/ElementsList';
import Form from './components/Form';

const initialElements = [
  {
    name: 'Max',
    age: 31,
  },
  {
    name: 'Jane',
    age: 22,
  },
];


function App() {
  const [element, setElement] = useState(initialElements);

  const NewInitialElements = (newE) => {
    setElement((prevElement) => {
      return [newE, ...prevElement];
    });
  };

  return (
    <div className="app">
      <div><Form passInitial={ NewInitialElements } className="goal-form"/></div>
      <div><ElementsList list={ element }/></div>
    </div>
  );
}

export default App;
