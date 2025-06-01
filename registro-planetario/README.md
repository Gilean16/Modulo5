🚀 Registro Planetario - Exploración Espacial
¡Bienvenido, Explorador Espacial! Este proyecto te permite registrar y explorar tus planetas favoritos del universo.
🎯 Objetivos del Proyecto

Configurar un proyecto Node.js desde cero
Utilizar el sistema de módulos de Node.js
Crear scripts en package.json para automatizar tareas
Mostrar información planetaria de manera organizada

🛠️ Instalación

Clona o descarga este proyecto
Abre una terminal en la carpeta del proyecto
Ejecuta el comando de exploración:

bashnpm run explorar
🚀 Comandos Disponibles

npm run explorar - Inicia la misión de exploración planetaria
npm start - Comando alternativo para iniciar la aplicación

📁 Estructura del Proyecto
registro-planetario/
├── package.json          # Configuración del proyecto
├── planetas.js           # Base de datos de planetas
├── index.js              # Centro de comunicaciones
├── .gitignore           # Archivos a ignorar en Git
└── README.md            # Esta guía
🌍 Planetas Incluidos
El registro actual incluye:

Titán - La luna más grande de Saturno
Próxima Centauri b - Exoplaneta en zona habitable
Kepler-452b - La "Tierra 2.0"
Europa - Luna de Júpiter con océano subterráneo
TRAPPIST-1e - Planeta rocoso con posible agua líquida
Enceladus - Luna de Saturno con géiseres de agua

🎨 Funcionalidades Extra

Estadísticas de exploración por tipo de planeta
Interfaz colorida con emojis
Información detallada de cada planeta (temperatura, distancia, tipo)
Contador total de planetas registrados

🚀 Expansiones Sugeridas

Más planetas: Añade nuevos descubrimientos al archivo planetas.js
Nuevas propiedades: Agrega coordenadas, imágenes, o habitabilidad
Filtros: Crea funciones para buscar planetas por tipo o año
Interactividad: Usa paquetes como inquirer para selección interactiva
Cowsay: Instala cowsay para mensajes divertidos

📦 Instalación de Paquetes Adicionales
Para experimentar con paquetes externos como cowsay:
bashnpm install cowsay
Luego podrás usarlo en tu código:
javascriptconst cowsay = require('cowsay');
console.log(cowsay.say({ text: '¡Planeta descubierto!' }));
🤝 Contribuciones
¡Comparte tus descubrimientos! Sube tu proyecto a GitHub para que otros exploradores puedan unirse a tu aventura espacial.
📄 Licencia
MIT - ¡Explora libremente!