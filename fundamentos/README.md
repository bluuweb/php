# Fundamentos
En esta sección veremos los temas fundamentales para trabajar con PHP.

## Variables
Son una reserva de la memoria que nos permite guardar información de forma temporal o estática, ya veremos más adelante que podemos guardar información en una base de datos para hacerla permamente.

``` php
  $nombreVariable = 'Título de mi sitio web';
```
En este caso creamos una variable ($nombreVariable), ten ojo que siempre tenemos que anteponer el signo peso **"$"**, los nombres no aceptan tildes, espacios, etc. Puedes escribir dos o mas palabras diferenciando cada una de ellas con mayúsculas (como en el ejemplo) o bien con guión bajo `_`  o guión medio `-`.

Asignamos un valor a la variable utilizando el signo `=` y entre comillas simples encerramos un texto. Esta variable es de tipo **Strings**.

::: tip 
Las variables son sensibles a minúsculas y mayúsculas, por lo tanto no es lo mismo **$nombrevariable** a **$nombreVariable**
:::

## ¿Par qué sirven las variables?
Es un elemento indispensable en todos los lenguajes de programación, ya que podemos reutilizarlas las veces que quieras y manipularlas a nuestro antojo. A medida que avanzamos en el curso siempre estaremos utilizando variables para nuestros desarrollos.

Por ejemplo si necesitamos pintar varias veces el título de nuestro sitio web, podrías simplemente llamar a la variable y en caso futuro que ese título cambiara solo debes manipular la variable en cuestión.

``` php
<?php
  // Aquí declaramos la variable al inicio de nuestro documento PHP
  $titulo = 'Mi primer sitio web con PHP'; 
?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $titulo; ?></title>
  </head>
  <body>
    <h1><?php echo $titulo; ?></h1>
  </body>
</html>
```

## Tipos de datos
En una variable se pueden almacenar diferentes tipos de datos, como por ejemplo números, boolean, array, objetos e iterables.

Cada uno de ellos los iremos utilizando y detallando.

## Variables numéricas
Podemos guardar números en una variable y utilizarlos para realizar cálculos o comprobaciones.

``` php
$numero = 100;
```
Los números no necesitan estar encerrados en comillas.

``` php
$numero = 100;
echo $numero + 50; // se pintará 150
```
## Variables floats
Los números de punto flotante (también conocidos como "de coma flotante" en español, y "floats" en inglés) pueden ser especificados usando cualquiera de las siguientes sintaxis:
``` php
$numeroFloats = 10.5; // Número con decimal
```

## Variables booleanas
Este es el tipo más simple. Un boolean expresa un valor que indica verdad. Puede ser TRUE (verdadero) o FALSE (falso).
``` php
$verdad = true;
$falso = false;
```

## Variables strings
Son las variables que pueden almacenar cadenas de caracteres, estas se pueden declarar tanto con comillas simples como con comillas dobles.
``` php
$palabras = 'Podemos almacenar una cadena de carácteres';
```

## Diferencia entre ' ' y " "
Las comillas dobles `" "` permiten concatenar de forma fácil variables de php, saltos de línea y otros caracteres escapados.

``` php
$miNombre = 'Ignacio';
$miApellido = 'Gutiérrez';
echo "Mi nombre completo es $miNombre $miApellido"; 
// Resuldado:  Mi nombre completo es Ignacio Gutiérrez
```
Pero esto nos puede traer problemas de seguridad. En tanto las comillas sensillas `' '` no permitirán este comportamiento.
``` php
$miNombre = 'Ignacio';
$miApellido = 'Gutiérrez';
echo 'Mi nombre completo es $miNombre $miApellido'; 
// Resuldado:  Mi nombre completo es $miNombre $miApellido
```


## Concatenación
Como vimos en el ejemplo anterior, al utilizar comillas sensillas no pudimos concatenar (osea juntar) nuestro `echo` con las varibles declaradas. Una solución es utilizar la concatenación, que no es más que juntar sus argumentos con un punto.
``` php
$miNombre = 'Ignacio';
$miApellido = 'Gutiérrez';
echo 'Mi nombre completo es ' . $miNombre . $miApellido; 
// Resuldado:  Mi nombre completo es IgnacioGutiérrez
```
## 02 Tarea Concatenación
Intenta separar las dos variables del ejemplo anterior utilizando concatenación.

[Ver respuesta aquí](/tareas/#_02-tarea-concatenacion)
