import { useState, useEffect } from 'react';

const API_BASE_URL = 'http://localhost:3000/api';

function LabelManager() {
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', color: '#808080' });

  // Fetch labels from API
  useEffect(() => {
    fetchLabels();
  }, []);

  const fetchLabels = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/labels`);
      const data = await response.json();

      if (data.success) {
        setLabels(data.data);
        setError(null);
      } else {
        setError('Failed to load labels');
      }
    } catch (err) {
      setError('Failed to connect to API');
      console.error('Error fetching labels:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/labels`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setLabels([...labels, data.data]);
        setFormData({ name: '', color: '#808080' });
        setIsCreating(false);
      } else {
        alert(data.error || 'Failed to create label');
      }
    } catch (err) {
      alert('Failed to create label');
      console.error('Error creating label:', err);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/labels/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setLabels(labels.map(label =>
          label.id === id ? data.data : label
        ));
        setEditingId(null);
        setFormData({ name: '', color: '#808080' });
      } else {
        alert(data.error || 'Failed to update label');
      }
    } catch (err) {
      alert('Failed to update label');
      console.error('Error updating label:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this label?')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/labels/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        setLabels(labels.filter(label => label.id !== id));
      } else {
        alert(data.error || 'Failed to delete label');
      }
    } catch (err) {
      alert('Failed to delete label');
      console.error('Error deleting label:', err);
    }
  };

  const startEdit = (label) => {
    setEditingId(label.id);
    setFormData({ name: label.name, color: label.color });
    setIsCreating(false);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsCreating(false);
    setFormData({ name: '', color: '#808080' });
  };

  if (loading) {
    return <div style={styles.loading}>Loading labels...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Labels</h2>
        {!isCreating && !editingId && (
          <button
            onClick={() => setIsCreating(true)}
            style={styles.addButton}
          >
            + New Label
          </button>
        )}
      </div>

      {(isCreating || editingId) && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editingId ? handleUpdate(editingId) : handleCreate(e);
          }}
          style={styles.form}
        >
          <input
            type="text"
            placeholder="Label name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={styles.input}
            required
            maxLength={50}
          />
          <input
            type="color"
            value={formData.color}
            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            style={styles.colorInput}
          />
          <div style={styles.formButtons}>
            <button type="submit" style={styles.saveButton}>
              {editingId ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              style={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div style={styles.labelList}>
        {labels.length === 0 ? (
          <p style={styles.emptyState}>No labels yet. Create one to get started!</p>
        ) : (
          labels.map(label => (
            <div key={label.id} style={styles.labelItem}>
              <div style={styles.labelInfo}>
                <span
                  style={{
                    ...styles.labelBadge,
                    backgroundColor: label.color,
                    color: getContrastColor(label.color)
                  }}
                >
                  {label.name}
                </span>
                <span style={styles.labelColor}>{label.color}</span>
              </div>
              <div style={styles.labelActions}>
                <button
                  onClick={() => startEdit(label)}
                  style={styles.editButton}
                  disabled={isCreating || editingId}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(label.id)}
                  style={styles.deleteButton}
                  disabled={isCreating || editingId}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Helper function to determine text color based on background
function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

const styles = {
  container: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  title: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600'
  },
  addButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  },
  form: {
    display: 'flex',
    gap: '12px',
    marginBottom: '20px',
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '6px',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px'
  },
  colorInput: {
    width: '60px',
    height: '38px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  formButtons: {
    display: 'flex',
    gap: '8px'
  },
  saveButton: {
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  },
  cancelButton: {
    backgroundColor: '#6b7280',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  },
  labelList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  labelItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    backgroundColor: '#ffffff'
  },
  labelInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  labelBadge: {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '500'
  },
  labelColor: {
    fontSize: '12px',
    color: '#6b7280',
    fontFamily: 'monospace'
  },
  labelActions: {
    display: 'flex',
    gap: '8px'
  },
  editButton: {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px'
  },
  deleteButton: {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '13px'
  },
  emptyState: {
    textAlign: 'center',
    color: '#6b7280',
    padding: '32px',
    fontSize: '14px'
  },
  loading: {
    textAlign: 'center',
    padding: '32px',
    color: '#6b7280'
  },
  error: {
    textAlign: 'center',
    padding: '32px',
    color: '#dc2626',
    backgroundColor: '#fee2e2',
    borderRadius: '6px'
  }
};

export default LabelManager;
