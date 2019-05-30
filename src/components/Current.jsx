import React from 'react';

class CurrentLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

 render() {
    return (
      <div>
        <div className="weatherIcon">
          ICON props.weatherIcon
        </div>
        <div className="description">
          NUMBER props.temperature,
          TEXT props.description,
        </div>
        <div className="extraInfo">
          TEXT-VALUE props.presión,
          TEXT-VALUE props.humedad,
          TEXT-VALUE props.viento,
          TEXT-VALUE props.maxMin,
          TEXT-VALUE props.sunsetAndDawn
        </div>
      </div>
    );
  }
}

export default CurrentTab;

// ícono del clima,
// temperatura,
// descripción del clima,
// presión,
// humedad,
// viento,
// temperaturas máxima y mínima,
// horario del amanecer y de la puesta del sol.
