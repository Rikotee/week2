'use strict';
import cat from '../models/catModel';

const cat_list_get = async (req, res) => {
  res.json(await cat.find());
};

const cat_get = async (req, res) => {
  res.json(await cat.findById(req.params.id));
};

const cat_post = async (req, res) => {
  console.log(req.body, req.file);
  const newCat = req.body;
  newCat.filename = req.file.filename;
  try {
    await cat.create(newCat);
    res.json(newCat);
  } catch(e) {
    console.error('cat controller create failed', e);
    res.json({message: e.message});
  }
}
export { cat_list_get, cat_get, cat_post };
