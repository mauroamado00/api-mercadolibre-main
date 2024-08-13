export default class ProductosDAO{

   async  obtenerProductos(){
        let url = `https://api.mercadolibre.com/sites/MLU/search?category=MLU1144${this.limite}`;
        let consulta = await fetch(url);
        let datos = await consulta.json();
        let productos = datos.items;
        this.paginaAnterior=  datos.links.previous;
        this.paginaSiguiente = datos.links.next;
        this.paginasTotales = datos.meta.totalPages;
        console.log(productos);
        return productos;
    }
}
