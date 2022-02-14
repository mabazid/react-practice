import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import classes from './App.module.css';
import ElementsList from './components/ElementsList';
import Form from './components/Form';
import ListContext from './context/ListContext';


const listReducer = (state, action) => {
  if (action.type === 'updateList') {
    return { value: action.value, count: action.value.length };
  }
  if (action.type === 'UserUpdated') {
    return { count: state.count++ };
  }
  return { value: [], count: 0 };
};

function App() {
  //const [usersList, setElement] = useState([]);

  // const NewInitialElements = (newE) => {
  //   setElement((prevElement) => {
  //     return [newE, ...prevElement];
  //   });
  // };

  // const listReducer = async (state, action) => {
  //   if (action.type === 'updateList') {
  //     const list = await getUsersListMongoDB();
  //     return { value: list, count: list.length };
  //   }
  // };

  const getUsersListMongoDB = async () => {
    const response = await axios.get('http://localhost:5000/users');
    dispatchList({ type: 'updateList', value: response.data });
  };

  const [usersList, dispatchList] = useReducer(listReducer, {
    value: [],
    count: 0,
  });


  useEffect(() => {
    getUsersListMongoDB();
  }, []);


  return (
    <div className={ classes.app }>
      <ListContext.Provider value={ {
        onListUpdate: getUsersListMongoDB,
      } }
      >
        <Form
          // passInitial={ add }
          // passInitial={ NewInitialElements }
        />
        <ElementsList
          list={ usersList.value }
          onDeleteUser={ () => dispatchList({ type: 'updateList' }) }
        />
        <footer>©Majd Abazid</footer>
      </ListContext.Provider>
    </div>
  );
}

export default App;
