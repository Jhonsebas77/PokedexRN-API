# Flyers App
Flyers App es una demo para el Semillero de Almundo desarrollada en React-Native que nos permite buscar distintos tipos de vuelos y ver el detalle del mismo

*Desarrollado por:* **Sebastian Otalora**

![Travis CI Build Status](the_image_url_here)

## Instalación
Primero se debe clonar el proyecto
<kbd>**SSH:** git@gitlab.com:Jhonsebas77/flyers-API.git</kbd>  

## Configuración 
 Una vez clonado el repositorio, configuremos lo básico para poder ejecutar el proyecto  
 
   -  Seguimos los siguientes pasos
	     -  1\. En la terminal nos ubicamos en el directorio con el proyecto en *React-Native* con <kbd>cd /nombre_proyecto </kbd>  
	     - 2\. Ejecutamos <kbd>npm install </kbd>  
	     
	   - 3\. En terminales distintas, ejecutamos en la primera ventana <kbd>npm run dev</kbd> 
	
## Endpoints
 - get /flights : Retorna Vuelos Ida
 - get /flight-goback : Retorna Vuelos Ida y Vuelta
 - post /flight-multi : Retorna Vuelos MultiDestino
 - post /flight : Crea Vuelos

