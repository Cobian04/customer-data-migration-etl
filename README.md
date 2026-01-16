# NodeJS Data ETL Automation Script

## Descripción
Script de automatización desarrollado en Node.js para simular un proceso de migración de datos (ETL). 
El sistema lee grandes volúmenes de datos crudos (CSV), aplica reglas de negocio para validar integridad (formatos de correo, tipos de datos numéricos) y segrega los registros en dos salidas: datos limpios listos para BD y reporte de errores para auditoría.

## Stack Tecnológico
- **Node.js**: Entorno de ejecución.
- **Streams (fs)**: Para manejo eficiente de memoria al leer archivos.
- **Lógica de Validación**: Implementación de reglas de negocio personalizadas.

## Cómo probarlo
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Correr `node index.js`.
4. Verificar los archivos de salida `.json` generados.
