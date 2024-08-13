
window.onload= async()=>{
   let url = `https://api.mercadolibre.com/sites/MLU/search?category=MLU1144`;
   let consulta = await fetch(url);
   let datos = await consulta.json();
   let productos = datos.results;
   mostrarProductos(productos);
}

function mostrarProductos(productos){
   let thProductoElement = document.querySelector("#productos");
   productos.forEach(producto => {
      let filaProducto = document.createElement("tr");
      filaProducto.innerHTML = `
                   <th><p>${producto.title}</p></th>
                   <th><a href="${producto.permalink}" target="_blank">Ver en mercado libre</a></th>
                   <th><img src="${producto.thumbnail}" alt="ERROR"></th>
                   <th><p>$${producto.price}</p></th>
                   <th><input type="submit" class="btn" value="Guardar en MySQL"></th>
      `;
      thProductoElement.appendChild(filaProducto);
      });
}   