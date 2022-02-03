import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import ElementsList from './components/ElementsList';
import Form from './components/Form';

const initialElements = [];


function App() {
  const [element, setElement] = useState(initialElements);

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get('http://mabazid:5000/users');
    console.log(response.data);
    setElement(response.data);
  };


  useEffect(() => {
    getGiHubUserWithAxios();
  }, []);


  const NewInitialElements = (newE) => {
    setElement((prevElement) => {
      return [newE, ...prevElement];
    });
  };


  return (
    <div className="app">
      <div><Form
        // passInitial={ add }
        // passInitial={ NewInitialElements }
        onAddUser={ getGiHubUserWithAxios }
        className="goal-form"
      /></div>
      <div><ElementsList list={ element } onDeleteUser={ getGiHubUserWithAxios }/></div>
    </div>
  );
}

export default App;
