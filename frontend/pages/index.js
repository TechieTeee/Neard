import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

const Index = () => {
  const [etlMessage, setEtlMessage] = useState('');

  const handleRunETL = async () => {
    try {
      // Simulate a successful ETL run with a random run time
      const runTime = Math.floor(Math.random() * 10) + 1; // Random run time between 1 and 10 minutes
      const successMessage = `ETL process completed successfully. Run time: ${runTime} minutes.`;

      setEtlMessage(successMessage);
    } catch (error) {
      console.error('Error triggering ETL:', error);
      setEtlMessage('Error triggering ETL process');
    }
  };

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav style={{ backgroundColor: 'teal', padding: '10px', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
        <a href="#home" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
          Home
        </a>
        <a href="#about" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
          About
        </a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
          Contact
        </a>
      </nav>

      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
          backgroundColor: 'teal',
          height: '100vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="https://www.pngarts.com/files/1/Nerd-Glasses-Free-PNG-Image-420x243.png"
          alt="Neard Logo"
          style={{ width: '300px', height: '300px', marginBottom: '20px' }}
        />
        <h1 style={{ fontSize: '3rem', margin: '0', fontFamily: 'Roboto, sans-serif' }}>Neard</h1>
        <p style={{ fontSize: '1.5rem', margin: '10px 0', fontFamily: 'Roboto, sans-serif' }}>
          Your Near Protocol ETL Tool
        </p>

        {/* Dropdown for different options */}
        <select
          style={{
            padding: '10px',
            fontSize: '1rem',
            margin: '10px 0',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          <option value="sharding">Sharding</option>
          <option value="partitioning">Partitioning</option>
          <option value="trend-analysis">Trend Analysis</option>
        </select>

        {/* Additional options as buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            Toggle Sharding
          </button>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            Toggle Partitioning
          </button>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Analyze Trends
          </button>
        </div>

        {/* Run ETL Button */}
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1.5rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
          onClick={handleRunETL}
        >
          Run ETL Process
        </button>

        {/* ETL Message */}
        {etlMessage && <p style={{ color: '#4CAF50', marginTop: '20px' }}>{etlMessage}</p>}
      </div>
    </div>
  );
};

export default Index;