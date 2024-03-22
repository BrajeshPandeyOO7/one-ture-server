import axios from "axios";
import { ICustomer, QueryType } from "../utility/type";
import { ITEM_URL } from "../utility/const";
import { BadRequestException } from "../utility/Error";
import prisma from "../db/prisma-client";
import { transFormbody } from "../utility";
import { recursiveSearch } from "../utility/searchIngine";

export const getCustomers = async (query: Partial<QueryType>): Promise<Record<string, any>> => {
    const { location, industry, search='', size=15, page=0 } = query;
    let url_param = ITEM_URL + (!!search ? '' : `&size=${size}&page=${page}`);
    if(location){
        url_param += `&item.additionalFields.displayLocation=${location}`
    }
    if(industry){
        url_param += `&item.additionalFields.industry=${industry}`;
    }
    let response;
    if(!search){
        response = await axios.get(url_param).then(res => res.data);
    }else {
       response = await recursiveSearch(
        url_param,
        Number(page),
        Number(size),
        search,
        ({items:[], metadata: {}})
       ) 
    }

    const { items=[], metadata } = response;
    return ({
        ok: !!items,
        data: {
            items: transFormbody(items, url_param),
            metadata
        }
    });
}

export const createCustomer = async (customer: ICustomer) => {
    const { customer_name, } = customer;
    if(!customer_name){
        throw new BadRequestException('Customer Name missing!');
    }
    return await prisma.customer.create({
        data: customer
    });
}