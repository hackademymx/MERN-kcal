# Aplicación MERN Hackademy

**Instalación**

1. Clona el proyecto `git@github.com:oscaroceguera/MERN-kcal-private.git`
2. Frontend:
  * Accede al front en la carpeta `cliente`
  * Instala dependecias del front con el comando `npm install` en la carpeta
  * Correr nuestra App con el comando `npm start`
3. Backend:
  * Accede al back en la carpeta `server`
  * instala dependecias con `npm install` en la carpeta server
  * Correr nuestra API con el comando `npm start`


**Requisitos:**

* Conocimiento de Javascript intermedio
* Conocimientos del controlador de versiones con GIT Usaremos la plataforma GitHub)
* Tener instalado [GIT](https://git-scm.com)
* Tener instalado [Nodejs](https://nodejs.org)
* Tener instalado NPM
* Tener instalado [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
* Editor de código que desees

**API (Backend)**:

* [Nodejs](https://nodejs.org)
* [Expressjs](https://expressjs.com/es)
* [MongoDB](https://www.mongodb.com)

**Client (Frontend):**

* [React](https://es.reactjs.org/)
* [Webpack](https://webpack.js.org/)
* [React router](https://reacttraining.com/react-router/web/guides/quick-start)
* [React loadable](https://github.com/jamiebuilds/react-loadable)
* [CSS-modules](https://github.com/css-modules/css-modules)

## Objetivo

Utilizando la arquitectura **MERN** (Mongo, Express, React, Node), crear aplicación que guarde la cantidad de calorías consumidas por comida.


* *[x] **00_INICIO:**
    * *[x] Preparar ambiente para el API (nuestro primer endpoint):
        * Instalar dependencias básicas para levantar un servicio con **Nodejs** usando **Expressjs**
    * *[x] Preparar ambiente para el Cliente (hola mundo en reactjs)
        * Instalar dependencias básicas para correr **Reactjs** usando **Webpack**

* *[x] **01_ALTA_DE_COMIDA:**
	* *[x] **[BACK]** - Crear el modelo de tipo de comida:
        * uuid: string
        * value: string
    * *[x] **[BACK]** - Crear controlador de alta de catalogo de tipo de comida
    * *[x] **[BACK]** - Crear ruta de acceso a la alta de catalogo de tipo de comida (POST)
    * *[x] **[BACK]** - Crear controlador de listado de catalogo de tipo de comida
    * *[x] **[BACK]** - Crear ruta de acceso al listado de catalogo de tipo de comida (GET)
    * *[x] **[BACK]** - Crear el modelo de tipo de alimento
        * uuid: string
        * label: string
        * kcal: number
        * type: String
    * *[x] **[BACK]** - Crear controlador de alta de catalogo de tipo de alimento
    * *[x] **[BACK]** - Crear ruta de acceso a la alta de catalogo de tipo de alimento (POST)
    * *[x] **[BACK]** - Crear controlador de listado de catalogo de tipo de alimento 
    * *[x] **[BACK]** - Crear ruta de acceso al listado de catalogo de tipo de alimento (GET)
    * *[x] **[BACK]** - Crear Modelo de comida:
        * uuid: String
        * meal: String
        * date: date
        * foods: referencia al catalogo de tipo de comida
        * mealType: referencia al catalogo de tipo de alimento
    * *[x] **[BACK]** - Crear controlador de alta de comida
    * *[x] **[BACK]** - Crear ruta de acceso para alta de comida (POST)
    * *[x] **[FRONT]** - Input de texto para introducir nombre de la comida (Pozole, Menudo, Ceviche, etc).
    * *[x] **[FRONT]** - Dropdown que consultara al catalogo de tipo de comida (Desayuno, Comida, Colación, Cena).
    * *[x] **[FRONT]** - Datepicker que registra la fecha de consumo.
    * *[x] **[FRONT]** - Autocomplete de alimentos utilizados, el cual consultara al catalogo de alimentos (pollo, cebolla, tomates, etc):
      * Autocomplete component: `https://gist.github.com/oscaroceguera/621a08f64e1b391059d5a0fc6bff1ccd`
      * Autocomplete functions `https://gist.github.com/oscaroceguera/bdf5512e13b399e9b2042dad7078c791`
    * *[x] **[FRONT]** - Guardar comida.
    
* *[x] **02_LISTADO_COMIDAS:**
  * *[x] **[BACK]** - Crear controlador de listado de comidas
  * *[x] **[BACK]** - Crear ruta de acceso de listado de comidas (GET)
  * *[x] **[FRONT]** - Listado de comidas

* *[x] **03_ACTUALIZAR_COMIDA:**
  * *[x] **[BACK]** - Crear controlador para obtener el de detalle de comida
  * *[x] **[BACK]** - Crear ruta de acceso para obtener el detalle de comida (GET)
  * *[x] **[FRONT]** - Mostrar de detalle de comida
  * *[x] **[BACK]** - Crear controlador para actualizar comida
  * *[x] **[BACK]** - Crear ruta para acceder a actualizar comida (PATCH)
  * *[x] **[FRONT]** - Actualizar comida

* *[x] **04_ELIMINAR_COMIDA:**
  * *[x] **[BACK]** - Crear controlador para elimiar comida
  * *[x] **[BACK]** - Crear url para acceder a elimiar comida (DELETE)
  * *[x] **[FRONT]** - Eliminar comida

* *[x] **05_SUMA_DE_KCAL:**
  * *[x] **[BACK]** - Crear controlador para obtener la suma de calorias **Por mes**
  * *[x] **[BACK]** - Crear ruta para obtener la suma de calorias **Por mes** (GET)
  * *[x] **[FRONT]** - Mostrar suma de calorias por mes
  * *[x] **[BACK]** - Crear controlador para obtener la suma de calorias **Por mes**
  * *[x] **[BACK]** - Crear ruta para obtener la suma de calorias **Por año** (GET)
  * *[x] **[FRONT]** - Mostrar suma de calorias por año
  * *[x] **[BACK]** - Crear controlador para obtener la suma de calorias **Por día**
  * *[x] **[BACK]** - Crear ruta para obtener la suma de calorias **Por día** (GET)
  * *[x] **[FRONT]** - Mostrar suma de calorias por día

## Nice to have

* *[x] **5.1_TDD_BACK_BONUS**
  * *[x] **[BACK]** - TDD

* *[ ] **5.2_TDD_FRONT_BONUS**
  * *[ ] **[FRONT]** - TDD

* *[ ] **5.3_E2E_FRONT_BONUS**
  * *[ ] **[FRONT]** - E2E

* *[ ] **06_SESION_USUARIOS**

* *[ ] **07_DEPLOY_PRODUCCION:**
  * *[ ] **[BACK]** - Heroku
  * *[ ] **[BACK]** - AWS EC2
  * *[ ] **[FRONT]** - Netlifly
  * *[ ] **[FRONT]** - AWS S3
