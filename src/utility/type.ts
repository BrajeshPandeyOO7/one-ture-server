export interface QueryType{
    location:string;
    description_summary:string;
    industry: string;
    customer_name: string;
    size: number;
    page: number;
}

export interface ICustomer {
    customer_logo:string;
    customer_name:string;
    headline:string;
    url:string;
    page_url:string;
    location:string;
    industry:string;
    description_summary:string;
}