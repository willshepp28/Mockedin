import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [linkedinUsers, setLinkedinUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/linkedinUsers')
      .then((response) => {
        setLinkedinUsers(response.data)
      })
  });

  console.log(linkedinUsers);

  return (
    <div>
      {linkedinUsers.map((user) => (
        <div key={user.id}>{user.name} -  {user.position}</div>
      ))}
    </div>
  )
}

export default App
