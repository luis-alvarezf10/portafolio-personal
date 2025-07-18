# Mi Portafolio React - Proyecto de Aprendizaje

Este es un proyecto básico de portafolio creado con React para aprender los conceptos fundamentales.

## Conceptos de React que aprenderás:

### 1. **Componentes Funcionales**
- Cada archivo en `src/components/` es un componente reutilizable
- Los componentes reciben `props` (propiedades) como parámetros

### 2. **Estado (State) con useState**
- `App.js`: Maneja qué sección está activa
- `Contact.js`: Maneja los datos del formulario

### 3. **Props**
- `Header.js` recibe `activeSection` y `setActiveSection` como props
- Permite comunicación entre componentes padre e hijo

### 4. **Renderizado Condicional**
- En `App.js` se muestra diferentes componentes según `activeSection`

### 5. **Manejo de Eventos**
- Clicks en botones de navegación
- Envío de formularios
- Cambios en inputs

### 6. **Mapeo de Arrays**
- Lista de habilidades en `About.js`
- Lista de proyectos en `Projects.js`
- Botones de navegación en `Header.js`

## Cómo ejecutar el proyecto:

1. Instalar dependencias:
   ```
   npm install
   ```

2. Ejecutar en modo desarrollo:
   ```
   npm start
   ```

3. Abrir http://localhost:3000 en tu navegador

## Próximos pasos para aprender más:

1. **Agregar más interactividad**: Contador de likes en proyectos
2. **Usar useEffect**: Para cargar datos o efectos secundarios
3. **Agregar routing**: Con React Router para URLs reales
4. **Conectar con APIs**: Para datos dinámicos
5. **Agregar animaciones**: Con CSS o librerías como Framer Motion

¡Experimenta modificando los componentes y estilos para entender mejor cómo funciona React!