import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/test`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error(err));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;
