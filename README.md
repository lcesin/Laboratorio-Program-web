# Documentación Técnica — Mi Revista Digital

## Estructura de Carpetas

```
├── index.html
├── README.md
├── assets/
│   └── img/
├── shared/
│   ├── css/
│   └── js/
└── views/
    ├── config/
    └── contact/
```

## Justificación de la Estructura

- **Separación de responsabilidades:**  
  Los archivos CSS y JS compartidos están en `/shared` para evitar duplicidad y facilitar el mantenimiento.  
  Los estilos y scripts específicos de cada vista están en sus respectivas carpetas bajo `/views`.

- **Modularidad y escalabilidad:**  
  La estructura permite agregar nuevas vistas o secciones fácilmente, manteniendo el código organizado.

- **Buenas prácticas:**  
  Se utilizan variables CSS en `vars.css` para facilitar cambios de tema y consistencia visual.  
  Los estilos globales y utilidades están en `common.css`, mientras que los estilos particulares de cada página están en su propio archivo.

- **Recursos centralizados:**  
  Imágenes, fuentes e iconos están en `/assets` para un acceso ordenado y eficiente.

---

## Decisiones Técnicas Clave

- **Uso de Bootstrap 5:**  
  Para el layout responsivo y componentes visuales, facilitando el diseño adaptable a dispositivos móviles.

- **fetch API y localStorage:**  
  Todos los formularios usan fetch para enviar datos a una API de pruebas y almacenan la respuesta en localStorage, demostrando integración de JS moderno.

- **Variables CSS:**  
  Permiten cambiar fácilmente la paleta de colores y otros aspectos visuales desde un solo archivo.

- **Rutas relativas:**  
  Se utilizan rutas relativas para asegurar compatibilidad tanto en desarrollo local como en despliegue en servidores.

- **Accesibilidad y semántica:**  
  Se emplean etiquetas semánticas (`header`, `nav`, `main`, `section`, `aside`, `footer`) y buenas prácticas de accesibilidad.

---

**Autor:**  
Luis Cesín  
Programación Orientada a la Web — UCAB
