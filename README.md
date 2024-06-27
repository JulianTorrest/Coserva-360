# Coserva-360

# Sale Order API

Este proyecto implementa una API RESTful utilizando Express.js, Node.js, Sequelize y TypeScript para gestionar items de órdenes de venta. El proyecto incluye validaciones con Joi, pruebas unitarias con Jest y Supertest, y se despliega utilizando Docker y Docker Compose.

## Tecnologías

- Docker
- Express.js
- Node.js (última versión LTS)
- TypeScript
- Sequelize
- Joi
- Prettier
- ESLint
- Jest
- Supertest
- React

## Requisitos Previos

- Docker y Docker Compose
- Node.js (versión LTS)

## Instalación

1. Clonar el repositorio:

    ```sh
    git clone https://github.com/JulianTorrest/Coserva-360.git
    cd Coserva-360
    ```

2. Instalar dependencias del backend:

    ```sh
    npm install
    ```

3. Instalar dependencias del frontend:

    ```sh
    cd sale-order-ui
    npm install
    cd ..
    ```

## Uso

1. Construir y levantar los servicios con Docker Compose:

    ```sh
    docker-compose up --build
    ```

2. La API estará disponible en `http://localhost:3000`.

3. La aplicación de React estará disponible en `http://localhost:3001`.

## Endpoints de la API

- `GET /api/sale-order-items` - Obtener todos los items de órdenes de venta.
- `POST /api/sale-order-items` - Crear un nuevo item de orden de venta.
- `GET /api/sale-order-items/:id` - Obtener un item de orden de venta por ID.
- `PUT /api/sale-order-items/:id` - Actualizar un item de orden de venta por ID.
- `DELETE /api/sale-order-items/:id` - Eliminar un item de orden de venta por ID.

## Validaciones

Utilizamos Joi para validar los datos de entrada en las rutas de la API. Ejemplo de esquema de validación:

```typescript
const saleOrderItemSchema = Joi.object({
  productName: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().precision(2).required(),
})
