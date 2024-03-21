import express from 'express';
import { customerControlle } from '../controller/customer';

const router = express.Router();

router
    .route('/')
    .get(customerControlle);

export default router;