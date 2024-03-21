import router from "./customer"

export const globalRoutes = (app:any) => {
    app.use('/customer', router)
}