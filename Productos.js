let newproducto = JSON.parse(localStorage.getItem("Productos")) || [];


let items = [
	{
		id: 	"ABC1"											,
		nombre: "ZAPATOS"										,
		precio: 50000											,
		descripcion: "up the bulk of the card's content."		,
		imagen: "images.jpg"
	},
	{
		id: 	"ABC2"											,
		nombre: "VESTIDO"										,
		precio: 80000											,
		descripcion: "up the bulk of the card's content."		,
		imagen: "vestido.jpg"
	},
	{
		id: 	"ABC3"											,
		nombre: "CAMISA"										,
		precio: 35000											,
		descripcion: "up the bulk of the card's content."		,
		imagen: "camisa.jpg"
	},
	


];

newproducto.map((x)=>{

	
	var newPro = {
		id: 	x.id										,
		nombre: x.nombre										,
		precio: x.precio											,
		descripcion: x.descripcion		,
		imagen: x.imagen
	}

	items.push(newPro)
})

// items.push(newproducto)