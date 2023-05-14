const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const products = await ProductTag.findAll();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  ProductTag.findOne({
    where: {
      tag: req.params.tag
    }
  })
    .then(ProductTag => res.json(ProductTag))
    .catch(err => res.json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body)

    res.json(tag)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(tag)
  }
  catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(tag)
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;
