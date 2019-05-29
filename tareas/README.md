# Tareas y respuestas
En esta sección se detallará todas las tareas y respuestas del curso de PHP.

## 01-01 Tarea HMTL y PHP
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
