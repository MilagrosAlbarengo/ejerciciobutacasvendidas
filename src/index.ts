let filas: number[] = new Array(2);
let butacas: number[] = new Array(3);
let asientosvendidos: number[] = new Array();
let asientosnovendidos: number[] = new Array();
let cantidad: number;
cantidad = 0;

//cantidad=Number(prompt("Ingresar"))
for (let index = 0; index < fila.length; index++) {
  for (let index = 0; index < butacas.length; index++) {
    if (cantidad > 0) {
      cantidad = asientosvendidos[index];
      asientosvendidos[index] = 1;
      fila[index] = asientosvendidos[index];
      fila[index] = butacas[index];
      console.log(butacas);
    } else if (cantidad === 0) {
      cantidad = asientosvendidos[index];
      asientosvendidos[index] = 0;
      fila[index] = asientosvendidos[index];
      fila[index] = butacas[index];
      console.log(butacas);
    }
  }
}
console.log(asientosvendidos);
