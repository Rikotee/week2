'use strict';
import express from 'express';
import { cat_get, cat_list_get, cat_post } from '../controllers/catController';
import multer from 'multer'

const upload = multer({ dest:'uploads/'})
const router = express.Router();

router.get('/', cat_list_get);

router.get('/:id', cat_get);

router.post('/',upload.single('cat'), cat_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});

export default router;
// https://gitlab.metropolia.fi/sssf22/week1/-/tree/main/server-three