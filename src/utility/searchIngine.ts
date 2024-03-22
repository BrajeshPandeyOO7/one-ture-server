import axios from "axios";
import { ITEM_URL } from "./const";
import { QueryType } from "./type";

export const recursiveSearch = async (url:string, page:number, size:number, search:string, data: any):Promise<any> => {
    if(data.items.length >= size){
        return ({
            items: data.items.slice(0, size),
            metadata: data.metadata
        });
    }
    let { items=[], metadata } = await axios.get(url+`&size=${size}&page=${page}`).then(res => res.data);
    if(!items.length){
        return data;
    }
    items = items.filter((i:any) => {
        const { descriptionSummary, } = i?.item?.additionalFields ?? {};
        const name = i?.item?.additionalFields['customer-name'];
        const regex = new RegExp(search, 'i');
        return regex.test(name) || regex.test(descriptionSummary)
    })
    return await recursiveSearch(
        url,
        page+1,
        size,
        search,
        ({ items:[...data.items, ...items], metadata })
    )
}