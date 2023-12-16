# Proyecto: EcoTech

## Prueba Técnica para Liftun: Desarrollador Full Stack Práctica
Aplicación web que consiste en la creación de acciones sostenibles.

**Tecnologías usadas:**
- reactjs
- vite
- react-router
- react-hook-form
- json-server
- react-query
- radix-ui (primitives, themes, colors)
- mui 

**Instalación y uso:**
- npm install para instalar las dependencias
- npm start para correr el proyecto

**Pantalla Home:**
- Esta vista muestra una tabla con todas las acciones conforme se van creando, de no haber ninguna se mostrará una tabla vacía.
- Cuenta con un botón de creación de acciones que nos dirige a la pantalla de create-actions.


**Pantalla Create-actions:**
- Esta vista cuenta con un formulario en donde el usuario podrá completar los siguientes campos:
  * Nombre de la acción
  * Selección de fecha de inicio y fecha final
  * Switches para indicar si la acción tiene objetivo o no, si tiene responsable o no, si requiere cálculo de huella o no, y si es una obligación legal o no.
  * Botón de selección de tipo de acción
  * Botón para guardar y crear la acción: al clickearlo y volver a nuestra Home podremos ver la acción creada en la tabla
  * Botón para cancelar y volver al Home

Además, la aplicación cuenta con un header y footer en donde encontramos información sobre la empresa: su logo, links a "sobre nosotros" y "blog" que nos darán a conocer más sobre la misma y el botón principal de creación de acciones.

