![Travis CI Build Status](the_image_url_here)

# PokedexRN API
Esta es la API de PokedexRN (<kbd>**SSH:** git@github.com:Jhonsebas77/PokedexRN.git</kbd>), una Pokedex basica desarrollada en React-Native que nos permite consultar toda la informacion sobre los Pokemones, Objetos y demas

<kbd>LA INFORMACION USADA ES PROPIEDAD DE POKEMON COMPANY</kbd>

*Desarrollado por:* **Sebastian Otalora**

## Instalación
Primero se debe clonar el proyecto
<kbd>**SSH:** git@github.com:Jhonsebas77/PokedexRN-API.git</kbd>  

## Configuración 
 Una vez clonado el repositorio, configuremos lo básico para poder ejecutar el proyecto  
 
   -  Seguimos los siguientes pasos
	     -  1\. En la terminal nos ubicamos en el directorio con el proyecto en *React-Native* con <kbd>cd /nombre_proyecto </kbd>  
	     - 2\. Ejecutamos <kbd>npm install </kbd>  
	     
	   - 3\. En terminales distintas, ejecutamos en la primera ventana <kbd>npm run dev</kbd> 
	
## Endpoints
 - [POST] /pokedex : BODY

<kbd> 

{
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/",
    "urlSprite":"https://image.ibb.co/cCK899/006.png",
    "idDex": 6,
	"types": [
	        {
	            "slot": 2,
	            "type": {
	                "name": "flying",
	                "url": "https://pokeapi.co/api/v2/type/3/",
	                "urlSprite":"https://image.ibb.co/n6EKGp/flying.gif"
	            }
	        },
	        {
	            "slot": 1,
	            "type": {
	                "name": "fire",
	                "url": "https://pokeapi.co/api/v2/type/10/",
	                "urlSprite":"https://image.ibb.co/bKsjhU/fire.gif"
	            }
	        }
	    ]
}

</kbd>

