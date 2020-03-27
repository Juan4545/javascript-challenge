// from data.js
var tableData = data;

console.log(tableData)

function filtro1(tableData){
var button = d3.select('#filter-btn');

// Checamos que el id que traemos es correcto.
console.log(button) 
// agregamos el evento del boton 
button.on("click",function(event){

  //borramos los datos de la tabla para cada busqueda 
  d3.select("tbody").selectAll("tr").remove().selectAll("td").remove();
  // obtenemos el valor de la caja
  var filtrofecha = d3.select('#datetime').property("value");

  var datos = tableData.filter(datos => 
      datos.datetime === filtrofecha);

  console.log(filtrofecha.length)
    //si el valor de la caja esta vacio te regresa la base de datos completa de lo contrario hace el filtro
if (filtrofecha === "" ) {
    // 
    var datos = tableData;

// agregamos los datos a la tabla
    var tbody = d3.select("tbody");
  datos.forEach((registro) => {
    var row = tbody.append("tr");
    Object.entries(registro).forEach(([key, value]) => {
      var celda = row.append("td");
      celda.html(value);
    });
  });

  } 
  else if (datos.length == 0) {
    window.alert("Sorry, we didn't find data, try with other date!");
  }

  else {

    // agregamos los datos a la tabla
  var tbody = d3.select("tbody");
  datos.forEach((registro) => {
    var row = tbody.append("tr");
    Object.entries(registro).forEach(([key, value]) => {
      var celda = row.append("td");
      celda.html(value);
    });
  });

//probamos que el filtro contega la información correcta
   // console.log(datos)
  };
});
}
//--------------------Nuevos filtros-------------------------------------------------------//

function filtromultiple(tableData){
var button = d3.select('#filter-btn');
//Creamos una funcion que nos ayude appendar los registros en la tabla y no estar llamandola en cada uno de  los if xD
function updatetable(dataUFO){
    var tbody = d3.select("tbody");
  dataUFO.forEach((registro) => {
    var row = tbody.append("tr");
    Object.entries(registro).forEach(([key, value]) => {
      var celda = row.append("td");
      celda.html(value);
    });
  });
};
var tableData = data ;

button.on("click",function(event){
d3.select("tbody").selectAll("tr").remove().selectAll("td").remove();

//accedemos a todos los filtros de nuestra página
var filtros = document.getElementsByClassName("form-control");
// lo siguiente seria filtrar por cada uno de nuestros filtros para poder hacer esto lo recorremos en un loop
var contadorFiltros = 0;
var contadorFiltros2 = 0;

for (var i = 0; i < filtros.length; i++) {
  //obtenemos cada uno de los nombres id de los filtros y posterior el valor
  var idfiltro = filtros[i].id;
  var valor = d3.select("#" + idfiltro).property("value");
  if (valor === "" ) {
    contadorFiltros = contadorFiltros + 1
  } 
// si no esta vació alguno de los filtros recoore los filtros y extrae la informacion
  else if (valor !== "") {
    //contadorFiltros2 = contadorFiltros2 + 1
   var datos2 = tableData.filter(datos =>datos[idfiltro] === valor);
   //datos2 = tableData.filter(datos =>datos[idfiltro] === valor);
   //var datos2 = tableData.filter(datos =>datos[idfiltro] === valor);
  }
};

// si los filtros estan vacios manda un mensaje 
if (contadorFiltros == 5) {
  window.alert("Sorry, but at least you need to enter a filter!");
}
//Por lo menos debe de existir la informacion de cada filtro
if (datos2.length == 0) {
  window.alert("Sorry, we didn't find data, try with other information!");
}
updatetable(datos2);
});
}
////UFO-level-1


//filtro1(tableData);

//// UFO-level-2.


filtromultiple(tableData);