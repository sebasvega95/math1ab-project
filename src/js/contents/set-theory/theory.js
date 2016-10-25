import {Image, Panel} from 'react-bootstrap';
import React from 'react';

const imageStyle = {
  margin: 'auto',
  padding: 20
};

const panelStyle = {margin: '5px 0'};

const theory = (
  <Panel header={<h1>Teoría de conjuntos</h1>} bsStyle="primary" style={panelStyle}>
    <p className="text-justify">
      Un <i>conjunto</i> es una colección de cosas. Por ejemplo, el conjunto de sus
      animales preferidos, de sus amigos, de los números enteros, etc.
    </p>
    <Image src={require('./img/vegetables.jpg')} rounded responsive style={imageStyle} />
    <p className="text-justify">
      Se suelen escribir los conjuntos entre llaves, así
      <strong> {'{pepino, zanahoria, papa, pera, ...}'}</strong>.
      en este caso, cada <i>miembro</i> o <i>elemento</i> del conjunto es un
      vegetal, una fruta o un tubérculo. Otra forma de ver los conjuntos es
      visualmente, se suelen representar por círculos o elípses verticales.
    </p>
    <Image src={require('./img/food-set.png')} rounded responsive style={imageStyle} />
    <p className="text-justify">
      Para propósitos de esa lección, digamos que se tiene un conjunto de personas
      <strong> {'{Miguel, Laura, Santiago, Camila, José, María, Juan, Daniela, Sebastián, Jimena}'}</strong>.
      Ahora, digamos que Miguel, Santiago, Camila y Daniela juegan fútbol:
    </p>
    <div className="math text-center">
      {`F = \\{\\text{Miguel}, \\text{Camila}, \\text{Santiago}, \\text{Daniela}\\}`}
    </div>
    <p className="text-justify">
      Y Santiago, Camila y Jimena juegan tenis:
    </p>
    <div className="math text-center">
      {'T = \\{\\text{Santiago}, \\text{Camila}, \\text{Jimena}\\}'}
    </div>
    <p className="text-justify">
      Podemos poner sus nombres en círculos separados
    </p>
    <Image src={require('./img/futbol-tenis.png')} rounded responsive style={imageStyle} />

  </Panel>
);

module.exports = theory;
