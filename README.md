#Trabajo Integrador - Ingeniería del Software
#TPStreamDeck
#https://kevindiazistea.github.io/tpstreamdeck/
Aplicación web interactiva desarrollada con HTML, CSS y JavaScript que nos muestra una tematica de Los Simpsons. Muestra 8 personajes y 4 ubicaciones con sus íconos, nombres y detalles.

- HTML, CSS, JavaScript
- Docker + Nginx
- API externa de Los Simpsons

TPStreamDeck/
	Imagenes/ 				#Los iconos de la pantalla de inicio de personajes y ubicaciones
	index.html 				#Pantalla principal que muestra la visualizacion de 8 Personajes y 4 Ubicacaiones
	styles.css				#Estilos de la web
	modal.js				  #Codigo Javascript para cerrar las ventanas
	script.js 				#Consume las APIs de Personajes y Ubicacaiones	
	dockerfile 				#Configuracion de Docker
	nginx.conf 				#Configuracion del servidor
	
	
Para ejecutar debemos descargar el proyecto desde GitHub
Link: 

1. Clonar el repositorio desde GitHub  
   git clone https://github.com/kevindiazistea/tpstreamdeck.git

2. Ir a la carpeta del proyecto  
   cd tpstreamdeck

3. Construir la imagen de Docker  
   docker build -t tpstreamdeck .

4. Ejecutar el contenedor  
   docker run -p 3359:80 --name TPKevinDiaz tpstreamdeck

5. Abrir el navegador en  
   http://localhost:3359

Este mismo nos debera de mostrar 8 personajes y 4 ubicaciones. Cada uno con su icono y nombre. Al realizar clic sobre cada icono nos traera una ventana con mas informacion que se obtiene desde la API correspondiente.

#10/2025 - Kevin Diaz
