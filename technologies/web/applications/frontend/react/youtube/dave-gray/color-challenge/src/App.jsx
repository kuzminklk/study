

import { useState } from 'react'


function App() {

  const [color, setColor] = useState('white');

  return (
    <main>
      <div id='color-field' style={{ backgroundColor: color}}></div>
      <form>
        <input type='text' onChange={(event) => {setColor(event.target.value)}}></input>
      </form>
    </main>
  )
}

export default App
