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
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(category => res.json(category))
  .catch(err => res.json(err))
});

// `/api/categories'
router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body)

    res.json(category)
  } catch (err) {
res.status(400).json(err)
  }
});

// '/api/categories/:id'
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(category)
  }
  catch (err) {
    res.status(400).json(err)
  }
});

// '/api/categories/:id'
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
   try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(category)
   } catch (err) {
    res.status(400).json(err)
   }
});

module.exports = router;
