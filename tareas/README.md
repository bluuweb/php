# Tareas y respuestas
En esta sección se detallará todas las tareas y respuestas del curso de PHP.

## 01 Tarea HMTL y PHP
Te reto a crear un archivo que mezcles HTML y PHP. 

***Pista**: tienes que seguir utilizando la extesión `.php` en tu archivo.*

#### Respuesta:
La forma más legible es crear la estructura de HTML5 y utilizar las etiquetas de apertura y cierre de PHP para mezclar nuestro código.

``` php
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <h1><?php echo 'Hola mundo con PHP'; ?></h1>
  </body>
</html>
```

## 02 Tarea Concatenación
Para lograrlo hay dos alternativas. La primera es crear una varible con el espacio y concatenarlo.
``` php
$miNombre = 'Ignacio';
$miApellido = 'Gutiérrez';
$espacio = ' ';
echo 'Mi nombre completo es ' . $miNombre . $espacio . $miApellido; 
// Resuldado:  Mi nombre completo es Ignacio Gutiérrez
```

La segunda es concatenar directamente el string dentro del `echo`
``` php
$miNombre = 'Ignacio';
$miApellido = 'Gutiérrez';
echo 'Mi nombre completo es ' . $miNombre . ' ' . $miApellido; 
// Resuldado:  Mi nombre completo es Ignacio Gutiérrez
```
Las dos operaciones nos llevan al mismo resultado.