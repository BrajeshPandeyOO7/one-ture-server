export interface QueryType{
    location:string;
    search:string;
    industry: string;
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