import { useState, useEffect, useRef } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import LabelManager from './components/LabelManager';

function App() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const taskListRef = useRef(null);

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

  const handleTaskCreated = () => {
    // Trigger refresh in TaskList component
    if (taskListRef.current) {
      taskListRef.current.fetchTasks();
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>TaskFlow</h1>
        <p style={{ color: '#6c757d' }}>Workshop Demo - AI-Assisted Development</p>
      </div>

      <div style={{ padding: '1rem', background: '#d1ecf1', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#0c5460' }}>Branch: demo-3-cursor-composer</h3>
        <p style={{ margin: 0, color: '#0c5460' }}>
          ✓ Full Labels feature implemented
          <br />
          ✓ Multi-file implementation with Cursor Composer
          <br />
          ✓ See TASK.md for hands-on exercise: Add label colors!
        </p>
      </div>

      <div style={{ padding: '1rem', background: loading ? '#fff3cd' : (health ? '#d1e7dd' : '#f8d7da'), borderRadius: '8px', marginBottom: '2rem' }}>
        <strong>API Status:</strong>{' '}
        {loading ? (
          'Connecting...'
        ) : health ? (
          <span style={{ color: '#0f5132' }}>✓ Connected</span>
        ) : (
          <span style={{ color: '#842029' }}>✗ Disconnected - Start backend with: cd backend && npm run dev</span>
        )}
      </div>

      <LabelManager />
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList ref={taskListRef} />
    </div>
  );
}

export default App;
