import express from 'express';
import {
    getFoodDrinks,
    getFoodDrinkById,
    createFoodDrink,
    updateFoodDrink,
    deleteFoodDrink    
} from '../controllers/Restaurant.js';

const router = express.Router();

router.get('/fooddrinks', getFoodDrinks);
router.get('/fooddrink/:id', getFoodDrinkById);
router.post('/fooddrink', createFoodDrink);
router.patch('/fooddrink/:id', updateFoodDrink);
router.delete('/fooddrink/:id', deleteFoodDrink);

export default router;