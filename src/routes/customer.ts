import express from 'express';
import { createCustomerController, customerControlle } from '../controller/customer';

const router = express.Router();

router
    .route('/')
    .get(customerControlle)
    .post(createCustomerController);

export default router;