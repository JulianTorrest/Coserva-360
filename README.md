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

Construir y levantar los servicios con Docker Compose:

```sh
docker-compose up --build
La API estará disponible en http://localhost:3000.

La aplicación de React estará disponible en http://localhost:3001.

Endpoints de la API
GET /api/sale-order-items - Obtener todos los items de órdenes de venta.
POST /api/sale-order-items - Crear un nuevo item de orden de venta.
GET /api/sale-order-items/:id - Obtener un item de orden de venta por ID.
PUT /api/sale-order-items/:id - Actualizar un item de orden de venta por ID.
DELETE /api/sale-order-items/:id - Eliminar un item de orden de venta por ID.
Validaciones
Utilizamos Joi para validar los datos de entrada en las rutas de la API. Ejemplo de esquema de validación:

javascript
const saleOrderItemSchema = Joi.object({
  productName: Joi.string().required(),
  quantity: Joi.number().integer().required(),
  price: Joi.number().precision(2).required(),
});

Pruebas
Ejecutar las pruebas unitarias con Jest y Supertest:

sh
npm test

Migraciones
Ejecutar migraciones de Sequelize:

sh
npx sequelize-cli db:migrate

Interfaz de Usuario
La interfaz de usuario está implementada con React y Axios para consumir la API. La aplicación lista todos los items de órdenes de venta.

Postman Collection
El proyecto incluye una colección de Postman para interactuar con la API. Importa el archivo collection.json en Postman para probar los endpoints.

GitHub Actions
El proyecto utiliza GitHub Actions para CI/CD. La configuración se encuentra en .github/workflows/ci.yml y ejecuta pruebas, verificaciones de estilo y construcción del proyecto en cada push o pull request a la rama main.

Configuración de GitHub Actions
Crea un archivo .github/workflows/main.yml con el siguiente contenido:

yaml
name: CI/CD Pipeline

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - name: Install dependencies
      run: npm install
    - name: Run tests
      run: npm test
    - name: Build the app
      run: npm run build
    - name: Deploy to Docker Hub
      if: github.ref == 'refs/heads/main'
      run: |
        echo ${{ secrets.DOCKER_HUB_PASSWORD }} | docker login -u ${{ secrets.DOCKER_HUB_USERNAME }} --password-stdin
        docker build -t my-react-app .
        docker tag my-react-app:latest ${{ secrets.DOCKER_HUB_USERNAME }}/my-react-app:latest
        docker push ${{ secrets.DOCKER_HUB_USERNAME }}/my-react-app:latest

Estructura del Proyecto
java
my-react-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ItemList.js
│   │   ├── ItemList.test.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
Pruebas del Componente ItemList
En el archivo src/components/ItemList.test.js, hemos agregado una prueba para verificar que el componente ItemList se renderiza correctamente y permite la eliminación de elementos.

javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from './ItemList';

test('renders Item List and allows deletion', async () => {
  render(<ItemList />);

  const deleteButtons = await screen.findAllByText(/delete/i);
  fireEvent.click(deleteButtons[0]);

  expect(deleteButtons[0]).not.toBeInTheDocument();
});

Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir posibles mejoras o arreglos.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.

Este `README.md` proporciona una descripción completa de cómo configurar, ejecutar y probar tu proyecto. Además, incluye instrucciones sobre Docker y GitHub Actions para la integración continua y despliegue, así como detalles sobre la estructura del proyecto y las pruebas del componente `ItemList`. Puedes adaptar estos detalles según las necesidades específicas de tu proyecto

