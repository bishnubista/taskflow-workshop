import { useState, useEffect } from 'react';

function App() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/health')
      .then(res => res.json())
      .then(data => {
        setHealth(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to connect to API:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>TaskFlow</h1>
      <p>Workshop Demo - AI-Assisted Development</p>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>API Status</h2>
        {loading ? (
          <p>Connecting to API...</p>
        ) : health ? (
          <p style={{ color: 'green' }}>✓ {health.message}</p>
        ) : (
          <p style={{ color: 'red' }}>✗ Failed to connect to API</p>
        )}
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fff3cd', borderRadius: '8px' }}>
        <h3>Current Branch: main</h3>
        <p>This is the starter skeleton. No task features implemented yet.</p>
        <ul>
          <li>Switch to <code>demo-2-cursor-basic</code> for basic CRUD</li>
          <li>Switch to <code>demo-3-cursor-fullstack</code> for complete CRUD</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
