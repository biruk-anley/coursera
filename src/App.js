import React, { useState } from 'react';

const App = () => {
  let headerTitle = "Aura Program Go for it"
  const [title, setTitle]=useState(headerTitle)
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle("Michigan Go for It")}>
         Change Title
      </button>


      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>
      <p>{count}</p>
    </div>
  );
}

export default App;