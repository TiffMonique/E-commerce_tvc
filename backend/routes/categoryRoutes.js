import express from 'express';
import { getCategories } from '../controllers/categoryController.js';

const categorieRoutes = express.Router();

categorieRoutes.get('/categories', getCategories);

export default categorieRoutes;
