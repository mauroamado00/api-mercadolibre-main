import ProductosDao from "./script.js";

export default class ProductosController{

    ProductosDao;

    constructor(){
        this.ProductosDao = new ProductosDao();
    }
    async  obtenerProductos(){
        return await this.ProductosDao.ProductosDao();
    }

}