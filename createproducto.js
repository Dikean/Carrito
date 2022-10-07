if (localStorage.length > 0) {
    var Arraynewproducto =  JSON.parse(localStorage.getItem("Productos")) ;
    }else{
        var Arraynewproducto = [] ;
    }


const GuardarLocal = () =>{
   
  var id = document.getElementById('id_producto').value
  var nombre = document.getElementById('nombre_prodructo').value
  var descripcion = document.getElementById('descripcion_producto').value
  var precio = document.getElementById('precio_producto').value
  var imagen = document.getElementById('foto_producto').value
 
  if(id === '' || nombre === '' || descripcion ==='' || precio ==='' || imagen ===''){
    console.log('entra')
    Swal.fire({
      icon: 'error',
     title: 'Ingresa Todos los datos correctamente',
     })
  }else{

    var newProducto= {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen
    }

    Arraynewproducto.push(newProducto)
   
    
 localStorage.setItem('Productos', JSON.stringify(Arraynewproducto));

Swal.fire(
    'Good job!',
    'Agregado correctamente!',
    'success'
  ).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
  
      location.reload(true)
    }
})

  }

  
}
 var obtenerPro = JSON.parse(localStorage.getItem("Productos"));
window.onload = () =>{
   

    return (document.getElementById('cuadroproductos').innerHTML = obtenerPro.map((x)=>{ 
        return`
		<div class="col-lg-4" id="producto-id-${x.id}">
				
		<br/><div class="card" style="width: 18rem;">
				  <img src="${x.imagen}" class="card-img-top" alt="..." >
				  <div class="card-body">
				    <h5 class="card-title">${x.nombre}</h5>
				    <p class="card-text">${x.descripcion}</p>
				    <p> $ ${x.precio}</p>
                    <button class="btn btn-danger" onclick="borrar(${x.id})">delete</button>
				  </div>
				</div><br/>
			</div>
           

	    `;
    }).join(""));
}

const limpiar = () => {

    Swal.fire({
        icon: 'error',
        title: 'Elimiando todos los productos correctamente',
      
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        localStorage.clear()
          location.reload(true)
        }
    })
}

let borrar = (id) => {
    let itemSeleccionado = id;
  
    

    Swal.fire({
        icon: 'error',
        title: 'Producto eliminado ',
      
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            for (var i =0; i< obtenerPro.length; i++) {
  
                console.log(obtenerPro[i].id)
               if (obtenerPro[i].id == itemSeleccionado) {
                obtenerPro.splice(i, 1);
                console.log('eliminado')
            }
            console.log(obtenerPro[i])
        
            }
        
            obtenerPro = JSON.stringify(obtenerPro);
            localStorage.setItem("Productos", obtenerPro);
          location.reload(true)
        }
    })
}