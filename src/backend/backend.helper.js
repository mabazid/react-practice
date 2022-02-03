import axios from 'axios';

async function getUsersList() {
  const response = await axios.get('http://localhost:5000/users');
  console.log(response.data);
}
