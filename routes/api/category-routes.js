const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
try {
  const categories = await Category.findAll();
  res.status(200).json(categories);
} catch (err) {
  res.status(500).json(err);
}
});

// `/api/categories/:id`
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  
});

// `/api/categories'
router.post('/', (req, res) => {
  // create a new category
});

// '/api/categories/:id'
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// '/api/categories/:id'
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    
  }
});

module.exports = router;
