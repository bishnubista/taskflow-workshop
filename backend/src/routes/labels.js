import express from 'express';
const router = express.Router();

// In-memory label storage
let labels = [
  {
    id: 'label-1',
    name: 'Bug',
    color: '#ef4444',
    created_at: new Date().toISOString()
  },
  {
    id: 'label-2',
    name: 'Feature',
    color: '#3b82f6',
    created_at: new Date().toISOString()
  },
  {
    id: 'label-3',
    name: 'Enhancement',
    color: '#10b981',
    created_at: new Date().toISOString()
  }
];

let labelIdCounter = 4;

// GET /api/labels - Get all labels
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: labels
  });
});

// POST /api/labels - Create new label
router.post('/', (req, res) => {
  const { name, color } = req.body;

  // Validation
  if (!name || name.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Label name is required',
      code: 'MISSING_NAME'
    });
  }

  if (name.length > 50) {
    return res.status(400).json({
      success: false,
      error: 'Label name must be 50 characters or less',
      code: 'NAME_TOO_LONG'
    });
  }

  // Check for duplicate name (case-insensitive)
  const nameExists = labels.some(
    label => label.name.toLowerCase() === name.trim().toLowerCase()
  );

  if (nameExists) {
    return res.status(400).json({
      success: false,
      error: 'Label name already exists',
      code: 'DUPLICATE_LABEL'
    });
  }

  // Validate color format if provided
  if (color && !/^#[0-9A-F]{6}$/i.test(color)) {
    return res.status(400).json({
      success: false,
      error: 'Color must be in hex format (#RRGGBB)',
      code: 'INVALID_COLOR'
    });
  }

  // Create new label
  const newLabel = {
    id: `label-${labelIdCounter++}`,
    name: name.trim(),
    color: color || '#808080',
    created_at: new Date().toISOString()
  };

  labels.push(newLabel);

  res.status(201).json({
    success: true,
    data: newLabel
  });
});

// PUT /api/labels/:id - Update label
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, color } = req.body;

  const labelIndex = labels.findIndex(label => label.id === id);

  if (labelIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Label not found',
      code: 'LABEL_NOT_FOUND'
    });
  }

  // Validate name if provided
  if (name !== undefined) {
    if (!name || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Label name cannot be empty',
        code: 'INVALID_NAME'
      });
    }

    if (name.length > 50) {
      return res.status(400).json({
        success: false,
        error: 'Label name must be 50 characters or less',
        code: 'NAME_TOO_LONG'
      });
    }

    // Check for duplicate name (excluding current label)
    const nameExists = labels.some(
      (label, idx) =>
        idx !== labelIndex &&
        label.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (nameExists) {
      return res.status(400).json({
        success: false,
        error: 'Label name already exists',
        code: 'DUPLICATE_LABEL'
      });
    }
  }

  // Validate color if provided
  if (color !== undefined && !/^#[0-9A-F]{6}$/i.test(color)) {
    return res.status(400).json({
      success: false,
      error: 'Color must be in hex format (#RRGGBB)',
      code: 'INVALID_COLOR'
    });
  }

  // Update label
  if (name !== undefined) {
    labels[labelIndex].name = name.trim();
  }
  if (color !== undefined) {
    labels[labelIndex].color = color;
  }

  res.json({
    success: true,
    data: labels[labelIndex]
  });
});

// DELETE /api/labels/:id - Delete label
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const labelIndex = labels.findIndex(label => label.id === id);

  if (labelIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Label not found',
      code: 'LABEL_NOT_FOUND'
    });
  }

  const deletedLabel = labels[labelIndex];
  labels.splice(labelIndex, 1);

  res.json({
    success: true,
    data: deletedLabel
  });
});

export default router;
