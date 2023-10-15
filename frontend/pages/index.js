// frontend/pages/index.js

import { useState } from 'react';
import axios from 'axios';

function Home() {
  const [etlMessage, setEtlMessage] = useState('');

  const handleRunETL = async () => {
    try {
      const response = await axios.post('http://localhost:5000/run-etl');
      setEtlMessage(response.data.message);
    } catch (error) {
      console.error('Error triggering ETL:', error);
      setEtlMessage('Error triggering ETL process');
    }
  };

  return (
    <div>
      <div>Welcome to Your Next.js App!</div>
      <button onClick={handleRunETL}>Run ETL</button>
      <div>{etlMessage}</div>
    </div>
  );
}

export default Home;
