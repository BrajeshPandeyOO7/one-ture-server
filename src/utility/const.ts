import 'dotenv/config'

export const PORT = process?.env?.PORT || 8080;
export const ITEM_URL = process?.env.AWS_ITEM_URL ?? ''