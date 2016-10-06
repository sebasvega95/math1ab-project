import {Image, ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import React from 'react';

const imageStyle = {
  margin: 'auto',
  padding: 20
};

const panelStyle = {margin: '5px 0'};

const theory = (
  <Panel header={<h1>Introducción a la trigonometría</h1>} bsStyle="primary" style={panelStyle}>
    <p className="text-justify">
      Si uno de los ángulos de un triángulo es 90° y otro es conocido, el tercer
      ángulo está fijo, puesto que la suma los tres ángulos de un triángulo
      siempre será igual a 180°. La forma del triángulo está completamente
      determinada por sus ángulos. Uno podría pensar que los lados del triángulo
      también determinan su forma, sin embargo, es fácil ver que escalar un
      triángulo no la altera.
    </p>
    <Image src={require('./img/shape.jpg')} rounded responsive style={imageStyle} />
    <p className="text-justify">
      Así, una vez los ángulos son conocidos, la <i>razón</i> de sus lados
      también, sin importar el tamaño de triángulo. Estas razones son dadas por
      las <i>funciones triginométricas</i> del ángulo
      conocido <span className="math">{'A'}</span>,
      donde <span className="math">{`a, b, \\text{y } c`}</span> son los lados
      del triángulo siguiente.
    </p>
    <Image src={require('./img/triangle.png')} rounded responsive style={imageStyle} />
    <ListGroup>
      <ListGroupItem>
        La función <b>seno</b> (sin), definida como la razón del lado opuesto
        al ángulo con la hipotenusa.
        <div className="math">
        {`\\sin{A} = \\frac{\\text{opuesto}}{\\text{hipotenusa}} = \\frac{a}{c}`}
        </div>
      </ListGroupItem>
      <ListGroupItem>
        La función <b>coseno</b> (cos), definida como la razón del lado adyacente
        al ángulo con la hipotenusa.
        <div className="math">
        {`\\cos{A} = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{b}{c}`}
        </div>
      </ListGroupItem>
      <ListGroupItem>
        La función <b>tangente</b> (tan), definida como la razón del lado opuesto
        al ángulo con el lado adyacente.
        <div className="math">
        {`\\tan{A} = \\frac{\\text{opuesto}}{\\text{adyacente}} = \\frac{a}{c}
        = \\frac{\\sin{A}}{\\cos{A}}`}
        </div>
      </ListGroupItem>
    </ListGroup>
  </Panel>
);

module.exports = theory;
