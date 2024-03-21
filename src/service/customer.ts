import axios from "axios";
import { QueryType } from "../utility/type";
import { ITEM_URL } from "../utility/const";

export const getCustomers = async (query: Partial<QueryType>): Promise<Record<string, string>> => {
    const { location, industry, description_summary, customer_name, size=15, page=0 } = query;
    let url_param = ITEM_URL + `&size=${size}&page=${page}`;
    if(location){
        url_param += `&item.additionalFields.displayLocation=${location}`
    }
    if(industry){
        url_param += `&item.additionalFields.industry=${industry}`;
    }
    if(description_summary){
        url_param += `&item.additionalFields.descriptionSummary=${description_summary}`;
    }
    if(customer_name){
        url_param += `&item.additionalFields.customerNameLower=${customer_name.toLocaleLowerCase()}`;
    }
    const items = await axios.get(url_param).then(res => {
        const { items=[] } = res.data;
        return items.map(({item}: Record<string, any>) => ({
            id: item.id,
            customer_logo: item.additionalFields.imageSrcUrl,
            customer_name: item.additionalFields['customer-name'],
            headline: item.additionalFields.headline,
            url: item.additionalFields.headlineUrl,
            page_url: url_param,
            location: item.additionalFields.displayLocation,
            industry: item.additionalFields.industry,
            description_summary: item.additionalFields.descriptionSummary
        }))
    });
    return items;
}