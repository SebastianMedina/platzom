# Platzom

Platzom es un idioma inventado para el [curso de fundamentos de JavaScript](https://platzi.com/js) de [platzi](https://platzi.com/), el mejor lugar de educacion online.

## Descripción del idioma

- Primera condicion: La palabra termina en 'ar', se le quitan esos dos caracteres.
- Segunda condicion: Si la palabra inicia con 'Z', se añade 'pe' al final.
- Tercera condicion: Si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un    guion en el medio.
- Cuarta condicion: Si la palabra origina es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas

##Instalación

```
npm install platzom

```

## USO

```
import platzom from 'platzom'

console.log(platzom('Programar')); //Program
console.log(platzom('Zorro')); //Zorrope
console.log(platzom('Zarpar')); //Zarppe
console.log(platzom('Abecedario')); //Abece-dario
console.log(platzom('Sometemos')); //SoMeTeMoS

```

## Creditos

- [Sebastian Medina](https://twitter.com/SebasMD25) con ayuda de [Platzi](https://twitter.com/platzi) y del Profesor [Sacha Lifszyc](https://twitter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
