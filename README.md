# Lab 3 - Proyecto MayWeather

## Quick Overview

Para correr:

``` bash
$ npm install

$ npm start
```

Esto debería ser suficiente para que se instalen todos los paquetes necesarios.

## Introducción

En este lab nos propusimos crear una Aplicación Front-End que sea capaz de
procesar peticiones a una API [Open Weather Api](https://openweathermap.org/).

Nuestro lenguaje principal es `React`, utilizamos como frameworks
[MATERIAL-UI](https://material-ui.com/) para importar el estilo de los
componentes, [BABEL](https://babeljs.io/docs/en/) para hacer codigo Javascript
compatible con versiones anteriores que pueda correr en navegadores viejos o
desactualizados y `Webpack` que nos permite importar
imágenes o iconos.


Nos guiamos principalmente con el
[tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/) de
`Robin Wieruch`. Ademas, usamos [Axios](https://github.com/axios/axios) para
manejar las peticiones que hacemos a la API.

Nuestra app es capaz de mostrar el clima actual y un pronóstico de 5 días de la
ciudad que se ingresa. La interfaz se compone de una barra en donde debe
ingresarse el nombre de la ciudad que se desea consultar y el país al que
pertenece separados por una coma. Luego de esto, se consultan los datos y se
muestran tres Tabs.

La primera tab muestra el clima actual en la ciudad consultada. Se
especifican en en una card los siguientes datos:

- ícono del clima
- temperatura
- descripción del clima
- presión
- humedad
- viento
- temperaturas máxima y mínima
- horario del amanecer y de la puesta del sol.

En la segunda tab se muestra un pronóstico extendido a 5 días, donde cada día
cuenta con una card con la siguiente información:

- día (nombre del día y fecha),
- ícono del clima,
- temperatura máxima,
- temperatura mínima.

Si se clickea en
alguna de las cards se muestra un detalle con información cada 3 horas del
estado del tiempo.

- rango horario al que pertenece la información,
- ícono del clima,
- temperatura,
- descripción del clima,
- presión,
- humedad,
- viento,
- probabilidad de lluvias,
- temperaturas máxima y mínima


La tercera tab no esta implementada pero queríamos mostrar el `índice UV` del
día actual.

## Diseño

- `App`

  - `NavBar`

      Titulo de la aplicación

  - `SearchBar`

      La barra de búsqueda guarda en su estado el input del cliente y luego se
      lo pasa al componente App que luego es consultado por el botón para hacer
      la petición.

  - `SearchButton`

      Es quien efectivamente hace la petición a la API una vez que el cliente ha
      ingresado una ciudad.

  - `Loader`

      Mientras se hace la peticion a la api y se arbren las tabs con la
      información se muestra el loader.

  - `MainTabs`

      Una vez que ya tenemos los datos, el estado de la app se actualiza y ya
      podemos mostrar información. React comprueba el estado de `App` y
      renderiza el componente `MainTabs`. Éste se encarga de mostrar las tabs
      `Current`, `Forecast` y `UVI` (la cuál al no estar implementada se muestra
      desactivada).

  - `Current`

      Detalla el clima actual de la ciudad consultada.

  - `Forecast`

      Definimos una función que se encarga de renderizar las cards del día y
      también espera un evento `onClick` para actualizar el estado de
      `DayDetail` y mostrar el detalle.

  - `DayDetail`

      - `MultipleCard`

        Componente que se muestra cuando se hace click en algún día que esta
        compuesto de hasta 8 `SimpleCards` (porque si se consulta el día actual
        sólo se mostraran las cards que falten para completar el día).

      - `SimpleCard`

        Muestra el detalle del tiempo de esas tres horas.

## Iconos

Los iconos que nos provee la API nos parecieron poco estéticos y encontramos
estos [weather-icons](https://erikflowers.github.io/weather-icons/) que nos
parecieron más apropiados por lo cuál decidimos utilizarlos.
