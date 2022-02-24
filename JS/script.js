alert("Bienvenidos a AsPhone")

//Clase para crear Productos//
class Productos{
	constructor(nombre,precio){
		this.nombre = nombre
		this.precio = precio 
	}	
}

//Creacion productos Celulares//
const iphone7plus = new Productos ("iPhone 7 plus", 300)
const iphoneX  = new Productos ("iPhone X", 500)
const iphone13 = new Productos ("iPhone 13", 1000)

//Creacion productos Relojes//
const watchSerie6 = new Productos ("Watch Serie 6", 300)
const watchSerie7 = new Productos ("Watch Serie 7", 400)

//Creacion producto AirPods//
const airPods = new Productos ("AirPods New Era", 400)

//Creacion producto MacBook//
const macBook = new Productos ("MacBook Pro", 1000) 

//////////////////////////////////////////////////////////////////////////

//VARIABLES//

let totalCompra;
let cantidadProductos;
let opciones;
let celulares;
let relojes;
let airpods;
let macbook; 

//////////////////////////////////////////////////////////////////////////

//FUNCIONES//

//Funcion para calcular la cantidad de productos que desea comprar//
function cantidadIngresada(){
 	cantidadProductos = parseInt(prompt("Ingrese la cantidad que desee comprar: "))
}


//Funcion para calcular Precio total de una venta//
function precioTotal(cantidad,precio){
	totalCompra = cantidad * precio
}

//Funcion para mostrar la cantidad de productos comprados y el precio total//
function compra(cantidad,nombre,total){
	alert("Usted acaba de comprar " + cantidad + " " + nombre + " y el total es: US$ " + total)
	alert("Gracias por su compra. \n AsPhone")	
}

//Funcion para mostrar que la opcion que eligio es incorrecta//
function opcionIncorrecta(){
	alert("Esa opcion es incorrecta. Por favor, vuelva a seleccionar un producto.")
} 


//Creacion de los menu de navegacion//
function menu(){
	opciones = parseInt(prompt("Seleccione el producto que desee comprar:" + "\n" + "1- iPhone" + "\n" + "2- Watch" + "\n" + "3- AirPods" + "\n" + "4- MacBook" ))
}
menu()

//Menu opcion1 (iphone)//
function iphone(){
	celulares = parseInt(prompt("Estos son nuestros iPhones disponibles:" + "\n" + "-" + iphone7plus["nombre"] + "\n" + "US$: " + iphone7plus["precio"] + "\n" + "Si desea comprar este producto ingrese (1)" + "\n" + "\n" + "-" + iphoneX["nombre"] + "\n" + "US$: " + iphoneX["precio"]  + "\n" + "Si desea comprar este producto ingrese (2)" + "\n" + "\n" + "-" + iphone13["nombre"] + "\n" + "US$: " + iphone13["precio"]  + "\n" + "Si desea comprar este producto ingrese (3)"))
}

//Menu opcion2 (watch)//
function watch(){
	relojes = parseInt(prompt("Estos son nuestros watch disponibles:" + "\n" + "-" + watchSerie6["nombre"] + "\n" + "US$: " + watchSerie6["precio"] + "\n" + "Si desea comprar este producto ingrese (1)" + "\n" + "\n" + "-" + watchSerie7["nombre"] + "\n" + "US$: " + watchSerie7["precio"]  + "\n" + "Si desea comprar este producto ingrese (2)"))
}

//Menu opcion3 (AirPods)//
function airPodsNewEra(){
	airpods = parseInt(prompt("AirPods disponibles: " + "\n" + "\n" + "-" + airPods["nombre"] + "\n" + "US$: " + airPods["precio"] + "\n" + "\n" + "Si desea comprar este producto, ingrese (0)" ))
}

//Menu opcion4 (MacBook)//
function macBookPro(){
	macbook = parseInt(prompt("MacBook disponibles: " + "\n" + "\n" + "-" + macBook["nombre"] + "\n" + "US$: " + macBook["precio"] + "\n" + "\n" + "Si desea comprar este producto, ingrese (0)" ))
}


//////////////////////////////////////////////////////////////////////////

//OPCIONES DEL MENU//

//Si ingresa algun numero que no este en las opciones//
while (opciones != 1 && opciones != 2 && opciones != 3 && opciones != 4){
	opcionIncorrecta()
	menu()
} 

//Eligio opcion numero uno (iPhone)//
if (opciones == 1){

	iphone()
	
	while(celulares != 1 && celulares != 2 && celulares != 3){
		opcionIncorrecta()
		iphone()
	}
	if (celulares == 1){
		cantidadIngresada()
		precioTotal(cantidadProductos,iphone7plus["precio"])
		compra(cantidadProductos,iphone7plus["nombre"],totalCompra)

	}
	else if (celulares == 2){
		cantidadIngresada()
		precioTotal(cantidadProductos,iphoneX["precio"])
		compra(cantidadProductos,iphoneX["nombre"],totalCompra)
	}
	else if (celulares == 3){
		cantidadIngresada()
		precioTotal(cantidadProductos,iphone13["precio"])
		compra(cantidadProductos,iphone13["nombre"],totalCompra)
	}
}

//Eligio opcion numero dos (Watch)//
else if (opciones == 2){

	watch()
	
	while(relojes != 1 && relojes != 2){
		opcionIncorrecta()
		watch()
	}
	
	if (relojes == 1){
		cantidadIngresada()
		precioTotal(cantidadProductos,watchSerie6["precio"])
		compra(cantidadProductos,watchSerie6["nombre"],totalCompra)
	}
	else if (relojes == 2){
		cantidadIngresada()
		precioTotal(cantidadProductos,watchSerie7["precio"])
		compra(cantidadProductos,watchSerie7["nombre"],totalCompra)
	}		
}

//Eligio opcion numero tres (AirPods)//
else if (opciones == 3){

	airPodsNewEra()
	
	while(airpods != 0){
		opcionIncorrecta()
		airPodsNewEra()
	}

	if (airpods == 0){
		cantidadIngresada()
		precioTotal(cantidadProductos, airPods["precio"])
		compra(cantidadProductos,airPods["nombre"],totalCompra)
	}
}

//Eligio opcion numero cuatro (MacBook)//
else if (opciones == 4){

	macBookPro()	
	
	while(macbook != 0){
		opcionIncorrecta()
		macBookPro()
	}

	if (macbook == 0){
		cantidadIngresada()
		precioTotal(cantidadProductos, macBook["precio"])
		compra(cantidadProductos,macBook["nombre"],totalCompra)
	}
}