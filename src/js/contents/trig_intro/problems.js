import React from 'react';
import {Image, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';

let imageStyle = {
  padding: 20,
  margin: 'auto'
};

const panelStyle = {margin: '5px 0'};

let theory = (
  <Panel header={<h1>Problemas</h1>} bsStyle='primary' style={panelStyle}>
    <ListGroup>
      <ListGroupItem>
        <p className='text-justify'>
          Una lata de gaseosa tiene una altura de 11 cm  y un radio de 4 cm.
          Encuentre <span className='math'>L</span>, el largo de la pajilla más
          larga que puede caber en la lata (Tal que la pajilla no se doble y
          esté totalmente dentro de la lata).
        </p>
        <Image src={require('./img/problem1.png')} rounded responsive style={imageStyle} />
      </ListGroupItem>
      <ListGroupItem>
        <p className='text-justify'>
          Un poste de teléfono proyecta una sombra de 18 pies de largo. Si el ángulo
          de elevación del Sol es 68°, ¿Cuál es la altura del poste?
        </p>
        <Image src={require('./img/problem2.jpg')} rounded responsive style={imageStyle} />
      </ListGroupItem>
      <ListGroupItem>
        <p className='text-justify'>
          Una cerca de seguridad  se contruye para proteger a los turistas del
          riesgo de un castillo antiguo. En un punto A, un observador mide un ángulo
          hacia el tope de la torre de 10°. Luego, camina 78 metros hacia la torre
          y mide de nuevo el ángulo, obteniendo 25° en un punto B. Encuentre la
          altura de la torre.
        </p>
        <Image src={require('./img/problem3.png')} rounded responsive style={imageStyle} />
      </ListGroupItem>
    </ListGroup>
  </Panel>
);

export default theory;
