import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
import ElementsList from './components/ElementsList';
import Form from './components/Form';

const initialElements = [];


function App() {
  const [element, setElement] = useState(initialElements);

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get('http://localhost:5000/users');
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
    <div className={ classes.app }>
      <Form
        // passInitial={ add }
        // passInitial={ NewInitialElements }
        onAddUser={ getGiHubUserWithAxios }
      />
      <ElementsList list={ element } onDeleteUser={ getGiHubUserWithAxios }/>
      <footer>©Majd Abazid</footer>
    </div>
  );
}

export default App;
