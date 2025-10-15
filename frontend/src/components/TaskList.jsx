import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const API_URL = 'http://localhost:3000/api';

const TaskList = forwardRef((props, ref) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/tasks`);
      const result = await response.json();

      if (result.success) {
        setTasks(result.data);
        setError(null);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to connect to API. Make sure the backend is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Expose fetchTasks to parent via ref
  useImperativeHandle(ref, () => ({
    fetchTasks
  }));

  const getStatusColor = (status) => {
    switch (status) {
      case 'todo':
        return '#6c757d';
      case 'in_progress':
        return '#0d6efd';
      case 'done':
        return '#198754';
      default:
        return '#6c757d';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'todo':
        return 'To Do';
      case 'in_progress':
        return 'In Progress';
      case 'done':
        return 'Done';
      default:
        return status;
    }
  };

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading tasks...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '2rem', color: '#dc3545', background: '#f8d7da', borderRadius: '8px', margin: '1rem 0' }}>
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Tasks ({tasks.length})</h2>
        <button
          onClick={fetchTasks}
          style={{
            padding: '0.5rem 1rem',
            background: '#0d6efd',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Refresh
        </button>
      </div>

      {tasks.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', background: '#f8f9fa', borderRadius: '8px' }}>
          <p>No tasks yet. Create your first task!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                padding: '1rem',
                background: 'white',
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{task.title}</h3>
                  {task.description && (
                    <p style={{ margin: '0 0 0.5rem 0', color: '#6c757d' }}>{task.description}</p>
                  )}
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#6c757d' }}>
                    {task.assignee && (
                      <span>
                        <strong>Assigned to:</strong> {task.assignee.name}
                      </span>
                    )}
                    {task.due_date && (
                      <span>
                        <strong>Due:</strong> {new Date(task.due_date).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    background: getStatusColor(task.status),
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {getStatusLabel(task.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;
