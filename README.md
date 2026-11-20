
# API REST de Productos

## Descripción
API REST desarrollada con Node.js y Express para administrar productos mediante operaciones CRUD.

## Tecnologías utilizadas
- Node.js
- Express.js
- JavaScript
- Postman
- Git y GitHub

## Instalación

1. Clonar el repositorio:
   `git clone https://github.com/050415-jt/P2-API-Productos.git`

2. Entrar a la carpeta:
   `cd P2-API-Productos`

3. Instalar dependencias:
   `npm install`

4. Iniciar el servidor:
   `node index.js`

## URL local
http://localhost:3000

## Endpoints

| Método | Ruta | Descripción |
|---|---|---|
| GET | /api/productos | Listar productos |
| GET | /api/productos/:id | Buscar producto por ID |
| POST | /api/productos | Crear producto |
| PUT | /api/productos/:id | Actualizar producto |
| DELETE | /api/productos/:id | Eliminar producto |

## Ejemplo de producto

```json
{
  "nombre": "Monitor Samsung",
  "precio": 3200,
  "stock": 8
}
```

## Pruebas con Postman
Las cinco operaciones CRUD fueron probadas con Postman. El repositorio incluye una colección exportada para facilitar las pruebas.

## Nota
La API utiliza un arreglo de productos en memoria, por lo que los cambios se pierden al reiniciar el servidor.
  