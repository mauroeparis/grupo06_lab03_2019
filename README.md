# Lab 3 - Proyecto MayWeather

## Quick Overview

Para correr:

``` bash
$ npm install

$ npm start
```

Esto debería ser suficiente para que se instalen todos los paquetes necesarios.

## Introducción

En este lab nos propusimos crear una Aplicación web enfocandonos en el Front-End
que sea capaz de procesar peticiones a una API [Open Weather
Api](https://openweathermap.org/) para devolver el pronóstico del tiempo actual
y un pronóstico extendido a 5 días.

Como framework principal usamos `React` y para el diseño de la aplicación
elegimos como base algunos componentes de
[Material-UI](https://material-ui.com/) que modificamos para poder mostrar los
datos del tiempo correctamente.

Utilizamos [Babel](https://babeljs.io/docs/en/) para hacer que nuestro código
Javascript sea compatible con versiones anteriores permitiendo correr en
navegadores viejos o desactualizados y `Webpack` que, principalmente, nos
permitió importar imágenes o iconos.


Nos guiamos principalmente con el
[tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/) de
`Robin Wieruch`e información que encontramos en foros como `StackoverFlow` y en
la misma [documentación de React](https://reactjs.org/). Ademas, usamos
[Axios](https://github.com/axios/axios) para manejar las peticiones que hacemos
a la API.

Nuestra app permite que el usuario ingrese una ciudad y un país para mostrar el
clima del día y el pronóstico de la semana. La interfaz se compone de una barra
en donde se ingresan los datos separados por una coma. Luego de esto, se
consultan los datos y se muestran tres Tabs.

La primera tab muestra el clima actual en la ciudad consultada. Se especifican
en una card los siguientes datos:

- ícono del clima
- temperatura
- descripción del clima
- presión
- humedad
- viento
- temperaturas máxima y mínima
- horario del amanecer y de la puesta del sol.

En la segunda tab se muestra el pronóstico extendido. Cada día cuenta con una
card con la siguiente información:

- día (nombre del día y fecha),
- ícono del clima,
- temperatura máxima,
- temperatura mínima.

Si se hace click en alguna de las cards se muestra información cada 3 horas del
estado del tiempo.

- rango horario al que pertenece la información,
- ícono del clima,
- temperatura,
- descripción del clima,
- presión,
- humedad,
- viento,
- estimación de lluvias (en mm),
- temperaturas máxima y mínima


La tercera tab no esta implementada pero queríamos mostrar el `índice UV` del
día actual.

## Diseño

- `App`

  - `NavBar`

      Titulo de la aplicación

  - `SearchBar`

      La barra de búsqueda guarda en su estado el input del cliente y luego se
      lo pasa al componente App que luego el botón consulta para hacer la
      petición.

  - `SearchButton`

      Es quien efectivamente hace la petición a la API una vez que el cliente ha
      ingresado una ciudad.

  - `Loader`

      Mientras se hace la petición a la API y se abren las tabs con la
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

      Componente que se muestra cuando se hace click en algún día del
      pronóstico. Hereda de `Current` y esta compuesto de hasta 8 cards (porque
      si se consulta el día actual sólo se mostraran las cards que falten para
      completar el día). En cada card se muestra el detalle del tiempo de esas
      tres horas.

## Iconos

Los iconos que nos proveía la API no nos gustaron y encontramos estos
[weather-icons](https://erikflowers.github.io/weather-icons/) que nos
parecieron muchos más estéticos para el estilo de nuestra aplicación.

## Errores

En el caso de que ocurran errores en la petición a la API mostramos un alerta
con el código del error. Errores comunes que pueden aparecer son:
falla de conexión a Internet o que el usuario ingrese datos inexistentes que no
correspondan a una ciudad.
