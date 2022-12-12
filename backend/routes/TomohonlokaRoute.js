import express from 'express';
import {
    getTravels,
    getTravelById,
    createTravel,
    updateTravel,
    deleteTravel    
} from '../controllers/Tomohonloka.js';

const router = express.Router();

router.get('/travels', getTravels);
router.get('/travel/:id', getTravelById);
router.post('/travel', createTravel);
router.patch('/travel/:id', updateTravel);
router.delete('/travel/:id', deleteTravel);

export default router;