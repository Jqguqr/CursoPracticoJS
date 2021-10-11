// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimtroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimtroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 6;
const baseTriangulo = 8;
const alturaTriangulo = 6.5;

console.log(
    "Los lados del tringulo miden: " 
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm "
);
console.log("Base del triangulo: " + baseTriangulo);
console.log("Altura del triangulo: " + alturaTriangulo);

const perimtroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimtroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del cuadrado es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Código del circulo
console.group("Circulo");
const radio = 3;
const PI = 3.141592;
console.log("El radio del circulo mide: " + radio + "cm");

const perimtroCirculo = 2 * PI * radio;
console.log("El perimetro del circulo mide: " + perimtroCirculo + "cm");

const areaCirculo = PI * radio * radio;
console.log("El area del cuadrado es: " + areaCirculo + "cm^2");
console.groupEnd();