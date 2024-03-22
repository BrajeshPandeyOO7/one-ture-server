export const transFormbody = (items: [], url_param:string) => {
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
    }));
}