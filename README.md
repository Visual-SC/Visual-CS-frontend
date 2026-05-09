# Visual SC Proyecto
Este es el espacio oficial del proyecto **Visual SC** 

<div align="center">
  <img src="./rodson-logo.png" alt="Logo Rodson Coffee" width="200" style="background-color: white; padding: 12px; border-radius: 8px;" />
</div>

# Descripción del proyecto

El objetivo es desarrollar una **aplicación web de pedidos en kiosco** para **Rodson Coffee**, una cafetería de especialidad ubicada en Bogotá (Carrera 20 #53-35) que combina café de especialidad, brunch y espacio cultural.

La aplicación permite al cliente:

1. Construir su orden desde un kiosco digital dentro del local
2. Navegar el catálogo por categorías (espresso, métodos filtrados, bebidas frías/calientes, pastelería, alicorados y adiciones)
3. Personalizar productos (tamaño, leche vegetal, helado, licor, método de preparación)
4. Elegir consumo en mesa o para llevar
5. Confirmar pedido, recibir número de orden y hacer seguimiento en pantalla hasta la entrega

La interfaz incluye características de **accesibilidad para personas con discapacidad**.

# Stack Tecnológico

### Frontend
![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)

### Backend
![MongoDB](https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

# Ejecutar con Docker (paso a paso)

> Este repositorio contiene el **frontend (React + Vite)**.
> La API se consume desde el navegador. La URL del backend se configura con la variable `VITE_API_BASE_URL`.

## Configurar URL del Backend (recomendado)

Este frontend lee la URL base del backend desde `VITE_API_BASE_URL`.

1. Crea un archivo `.env` en la raíz (puedes copiar [.env.example](.env.example)).
2. Coloca la URL pública de tu despliegue (por ejemplo el asociado a `visual-cs-backend-backend`).

Ejemplo:

```bash
VITE_API_BASE_URL=https://TU_BACKEND_PUBLICO
```

## Requisitos

1. Tener instalado **Docker Desktop** (incluye `docker compose`).
2. Estar ubicado en la raíz del proyecto (donde están `Dockerfile`, `Dockerfile.dev` y `docker-compose.yml`).

## Opción A (recomendada): Docker Compose

### 1) Producción (build + Nginx)

1. Construir y levantar el contenedor:

```bash
docker compose up --build app
```

2. Abrir la app:

- http://localhost:8080

3. Detener y limpiar:

```bash
docker compose down
```

### 2) Desarrollo (Vite + hot reload)

1. Levantar el entorno de desarrollo:

```bash
docker compose up --build dev
```

2. Abrir la app:

- http://localhost:5173

3. Detener:

```bash
docker compose down
```

## Opción B: Docker “puro” (sin compose)

### Producción

```bash
docker build -t visualsc-frontend -f Dockerfile .
docker run --rm -p 8080:80 visualsc-frontend
```

Abrir: http://localhost:8080

### Desarrollo

```bash
docker build -t visualsc-frontend-dev -f Dockerfile.dev .
docker run --rm -it -p 5173:5173 -v ${PWD}:/app -v /app/node_modules visualsc-frontend-dev
```

> En Bash/Zsh (Linux/macOS) el volumen sería: `-v $(pwd):/app`.

Abrir: http://localhost:5173

## Notas y solución de problemas

- **Puerto ocupado**: cambia el mapeo, por ejemplo `- "8081:80"` o `-p 8081:80`.
- **Backend/API**: si tu backend corre en tu máquina en `http://localhost:3001`, el frontend (en el navegador) podrá consumirlo sin cambios.
- **Hot reload lento o no detecta cambios**: el contenedor de `dev` usa polling para file-watching; en proyectos grandes puede ser más pesado, pero suele ser lo más estable en Windows.
- **Error 504 (Outdated Optimize Dep)**: fuerza la re-optimización de dependencias o reconstruye el contenedor:

```bash
npm run dev:force
```

En Docker (dev):

```bash
docker compose down -v
docker compose up --build dev
```
- **Error BuildKit** (`parent snapshot ... does not exist`): limpia el cache y reconstruye:

```bash
docker buildx prune -af
docker builder prune -af
docker compose build --no-cache dev
```

# Características del proyecto

### Catálogo digital del menú
Menú completo de Rodson Coffee organizado en 8 categorías: base de espresso, métodos de café filtrado (inmersión, goteo, presión), bebidas frías, bebidas calientes sin café, pastelería dulce, pastelería de sal, alicorados y adiciones. Cada producto incluye nombre, precio y opciones de personalización.

### Personalización de productos
- **Espresso:** selección de tamaño, leche vegetal (+$5.5K), bola de helado de vainilla (+$4.5K), licor (+$8K)
- **Métodos filtrados:** elección de método (inmersión/goteo/presión) y cantidad (1 taza $10K / 2 tazas $18K), con recargo de $3K para naturales y honeys
- **Bebidas frías:** malteadas, limonadas, sodas, cervezas y más

### Carrito de compras
Sistema de carrito con acumulación de productos, visualización del total en tiempo real y posibilidad de agregar múltiples productos antes de confirmar la orden.

### Flujo de pedido completo
1. Iniciar pedido en el kiosco
2. Elegir modalidad: para mesa o para llevar
3. Construir la orden navegando categorías y personalizando
4. Revisar y confirmar pedido
5. Realizar pago
6. Recibir número de orden

### Selección de mesa
Plano digital del local que permite al cliente elegir mesa cuando consume en el establecimiento, o tomar un número de mesa física.

### Seguimiento de orden en tiempo real

Pantalla de monitoreo donde el cliente ve el estado de su pedido ("en preparación" → "listo") y sabe cuándo recoger en barra o esperar al mesero en mesa.

### Accesibilidad

Interfaz diseñada con características de accesibilidad para personas con discapacidad, alineada con el propósito social de Visual SC.

### Identidad de marca

Diseño alineado con la estética de Rodson Coffee: elegancia artesanal, tono cercano y experiencia premium dentro del nicho de café de especialidad en Colombia.

# Aspectos técnicos

## Manejo de la API y gestión general del estado

## Conexión entre `api.ts` y `useProducts.ts`

El archivo `api.ts` contiene la función `fetchProducts`, que se encarga de realizar una solicitud HTTP a la API para obtener los productos disponibles. Esta función utiliza `fetch` para enviar una solicitud GET al endpoint `http://localhost:3001/api/get-products`. Si la solicitud es exitosa, devuelve un array de productos extraído de la respuesta JSON. En caso de error, se captura y se registra en la consola.

> Nota: actualmente la URL base del backend se controla con `VITE_API_BASE_URL`, y los endpoints preferidos del backend siguen el plan: `GET /api/products`, `GET /api/products/:id`, `GET /api/products/category/:slug`.

### Implementación de `fetchProducts` en `useProducts.ts`

En el archivo `useProducts.ts`, se utiliza la función `fetchProducts` dentro de la implementación de un store de Zustand. Este store, llamado `useProductStore`, gestiona el estado global de los productos en la aplicación. 

El store define un estado inicial con un array vacío de productos (`products: []`) y una función `getProducts` que se encarga de actualizar este estado. La función `getProducts` es asíncrona y utiliza `fetchProducts` para obtener los datos de la API. Una vez obtenidos los productos, se actualiza el estado del store con la función `set` proporcionada por Zustand:

```typescript
getProducts: async () => {
  try {
    const products = await fetchProducts();
    set({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
```

### Flujo de Consumo

1. **Definición de la API**: La función `fetchProducts` en `api.ts` encapsula la lógica de la solicitud HTTP, asegurando que el manejo de errores y la extracción de datos estén centralizados.
2. **Integración con Zustand**: En `useProducts.ts`, `fetchProducts` se invoca dentro de `getProducts`, que forma parte del store de Zustand. Esto permite que los datos obtenidos de la API se almacenen en el estado global.
3. **Consumo en Componentes**: Los componentes de React pueden consumir el estado y las funciones del store utilizando el hook `useProductStore`. Por ejemplo:

```typescript
import { useProductStore } from "../hooks/useProducts";

const ProductList = () => {
  const { products, getProducts } = useProductStore();

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.nombre}>{product.nombre}</div>
      ))}
    </div>
  );
};
```

En este ejemplo, el componente `ProductList` utiliza el hook `useProductStore` para acceder a los productos y la función `getProducts`. Al montar el componente, se invoca `getProducts` para cargar los datos desde la API y renderizarlos en la interfaz de usuario.

