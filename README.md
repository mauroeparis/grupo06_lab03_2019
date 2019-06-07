# Lab 3 - Proyecto MayWeather

# Quick Overview

Para correr:

``` bash
$ npm install

$ npm start
```

Esto debería ser suficiente para que se instalen todos los paquetes necesarios.

# Introducción

En este lab nos propusimos crear una Aplicación Front-End que sea capaz de
procesar peticiones a una API [Open Weather Api](https://openweathermap.org/).

Nuestro lenguaje principal es `React` usando como frameworks
[MATERIAL-UI](https://material-ui.com/) para importar el estilo de los
componentes, [BABEL](https://babeljs.io/docs/en/) para hacer codigo Javascript
compatible con versiones anteriores que pueda correr en navegadores viejos o
desactualizados y `Webpack` que nos permite importar
imágenes o iconos.


Principalmente, nosotros seguimos este
[tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/) de
`Robin Wieruch` gracias a la información que nos dio nuestro profesor `Cristian
Cardelino`.

Ademas también usamos [Axios](https://github.com/axios/axios) para manejar las
peticiones que hacemos a la API.

Nuestra app es capaz de mostrar el clima actual del nombre de la ciudad que se
ingresa. La interfaz se compone de una barra en donde debe ingresarse el nombre
y pais separados por una coma. Luego de esto, se consultan los datos y se
muestran tres Tabs.

En la primera tab podemos ver el pronostico actual en este momento. Aquí se
muestran en una card

- ícono del clima
- temperatura
- descripción del clima
- presión
- humedad
- viento
- temperaturas máxima y mínima
- horario del amanecer y de la puesta del sol.

En la segunda tab se muestra un pronóstico extendido a 5 días con la siguiente información:

- día (nombre del día y fecha),
- ícono del clima,
- temperatura máxima,
- temperatura mínima.

y si se clickea en
alguna de las cards se muestra un detalle con información cada 3 horas del
estado del tiempo. ( **HABLAR ACA si hacemos algo raro con LA CARD ACTUAL**)

- rango horario al que pertenece la información,
- ícono del clima,
- temperatura,
- descripción del clima,
- presión,
- humedad,
- viento,
- probabilidad de lluvias,
- temperaturas máxima y mínima


La tercera tab no esta implementada pero queríamos mostrar un `índice UV` del
día actual.



# Diseño

Nuestra aplicación tiene un componente central llamado `App` que conforma el `root` del esta dividida en tres componentes principales `NavBar`,
`Current` y `ForecastTabs`. A su vez, estas están definidas dentro de la
componente 'madre' o `root` llamada `App` y tienen otros componentes hijos en
donde se muestra la información pertinente a cada una.


Dentro de `NavBar` definimos la barra de búsqueda y junto a esta el botón que es
quien efectivamente hace la petición a la API una vez que el cliente ha
ingresado una ciudad. La barra de búsqueda guarda en su estado el input del
cliente y luego se lo pasa al componente App del cual luego el botón lo
consultara para hacer la petición.

Una vez que ya tenemos los datos, el estado de la app se actualiza y ya podemos
mostrar información. React comprueba el estado de `App` y renderiza el
componente `ForecastTabs`.

Este componente esta definido en `ForecastTabs.jsx` y es el que se encarga de
mostrar a `Current`, `Forecast` y `UVI` (el cual como no lo hemos implementado
solo se muestra desactivado).

 El diseño de la card `Current` se encuentra definido dentro del archivo
 `Current.jsx` en donde utilizamos las `Grid` y `Paper` de `material-ui` para
 darle el formato a la card y luego poder mostrar la información de manera
 prolija. La información que mostramos es la que se pasa por `props` cuando se
 llama al componente dentro de `ForecastTabs`.

El diseño de la pestaña `Forecast` esta dentro del archivo `Forecast.jsx`. Aqui
definimos una función que se encarga de renderizar las cards del día y también
espera un evento `onClick` para actualizar el estado de `ForecastTabs` y mostrar
el detalle.

En el archivo `ForecastDetail.jsx` definimos principalmente dos componentes:
`MultipleCard` y `SimpleCard` La primera corresponde al componente que se
muestra cuando se hace click en algún día que esta compuesto de hasta 8
`SimpleCards` (porque si se consulta el día actual solo se mostraran las cards
que falten para completar el día). Además se definen varias funciones aquí que
utilizamos para formatear los datos para mostrarlos correctamente.


## Iconos

Los iconos que nos provee la API nos parecieron poco estéticos y encontramos
estos [weather-icons](https://erikflowers.github.io/weather-icons/) que nos
parecieron mucho más lindos.
