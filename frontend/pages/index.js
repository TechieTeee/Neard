// frontend/pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make an API request to your backend
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div>Welcome to Your Next.js App!</div>
      {data && <div>Data from Backend: {data}</div>}
    </div>
  );
}

export default Home;
