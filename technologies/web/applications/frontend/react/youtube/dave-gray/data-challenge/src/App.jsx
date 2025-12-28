

import { useState, useEffect } from 'react'


function App() {

  const [choice, setChoice] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/${choice}`);
        const result = await responce.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [choice])

  return (
    <>
      <header>
        <button onClick={() => { setChoice('users') }}>
          Users
        </button>
        <button onClick={() => { setChoice('comments') }}>
          Comments
        </button>
        <button onClick={() => { setChoice('posts') }}>
          Posts
        </button>
      </header>
      <main>  
        {
        data.map(item => (
          <tr key={item.id}>
            {Object.entries(item).map(([key, value]) => (
              <td>{JSON.stringify(value)}</td>
            ))}
          </tr>
        ))
        }
      </main>
    </>
  )
}

export default App
