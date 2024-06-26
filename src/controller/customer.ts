import { Request, Response } from "express";
import { ErrorType } from "../utility/Error";
import { createCustomer, getCustomers } from "../service/customer";

export async function customerControlle(req:Request, res:Response){
    try {
        const { query } = req;
        const response = await getCustomers(query);
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        const { statusCode=500 , message='Internal server Error'} = error as  ErrorType;
        res.status(statusCode).json({
            message,
        })
    }
}

export async function createCustomerController(req:Request, res:Response){
    try {
        const { body } = req;
        const response = await createCustomer(body);
        res.status(201).json(response);
    } catch (error) {
        console.log(error);
        const { statusCode=500 , message='Internal server Error'} = error as  ErrorType;
        res.status(statusCode).json({
            message,
        })
    }
}