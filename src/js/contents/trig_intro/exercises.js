import {Button, Col, Collapse, Grid, Image, ListGroup, ListGroupItem,
  Panel, Row, Well} from 'react-bootstrap';
import React from 'react';

const collapsibleWellStyle = {paddingTop: 25};

const imageStyle = {
  padding: 20,
  margin: 'auto'
};

const liStyle = {padding: 10};

const mathDivStyle = {
    margin: 'auto',
    padding: 10,
    textAlign: 'center'
};

const buttonStyle = {margin: '5px 0'};

const panelStyle = {margin: '5px 0'};

const CollapsibleWell = React.createClass({
  getInitialState() {
    return {
      buttonString: 'Mostrar',
      open: false
    };
  },

  handleClick() {
    let newString = 'Mostrar';

    if (this.state.buttonString === 'Mostrar') {
      newString = 'Ocultar';
    }
    this.setState({
      buttonString: newString,
      open: !this.state.open
    });
  },

  render() {
    return (
      <div style={collapsibleWellStyle}>
        <Button bsStyle="info" onClick={this.handleClick} style={buttonStyle}>
        {this.state.buttonString} solución
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>{this.props.children}</Well>
          </div>
        </Collapse>
      </div>
    );
  }
});

const exercises = (
  <Panel header={<h1>Ejercicios</h1>} bsStyle="primary" style={panelStyle}>
    <ListGroup>
      <ListGroupItem>
        <p className="text-justify">
          Liste los valores
          de <span className="math">{'\\sin{\\alpha}'}</span>{', '}
          <span className="math">{'\\cos{\\alpha}'}</span>{', '}
          <span className="math">{'\\sin{\\beta}'}</span>{' y '}
          <span className="math">{'\\tan{\\beta}'}</span> para el
          siguiente triángulo.
        </p>
        <Image src={require('./img/ex1.png')}
          rounded responsive style={imageStyle} />
        <CollapsibleWell>
          <p className="text-justify">
          Para ambos ángulos, la hipotenusa es el lado de 9.7 unidades de largo.
          </p>
          <p className="text-justify">
          Para el ángulo <span className="math">{'\\alpha'}</span> el lado
          opuesto es el de 6.5 de largo, y el adyacente es el de 7.2.
          </p>
          <p className="text-justify">
          Para el ángulo <span className="math">{'\\beta'}</span> el lado
          opuesto es el de 7.2 de largo, y el adyacente es el de 6.5.
          </p>
          <p className="text-justify">
          Con esta información, podemos usar las definiciones de seno, coseno
          y tangente para hallar lo pedido:
          </p>
          <ul>
            <li style={liStyle}>
              <span className="math">
                {'\\sin{\\alpha} = \\frac{6.5}{9.7} \\approx 0.670'}
              </span>
            </li>
            <li style={liStyle}>
              <span className="math">
                {'\\cos{\\alpha} = \\frac{7.2}{9.7} \\approx 0.742'}
              </span>
            </li>
            <li style={liStyle}>
              <span className="math">
                {'\\sin{\\beta} = \\frac{7.2}{9.7} \\approx 0.742'}
              </span>
            </li>
            <li style={liStyle}>
              <span className="math">
                {'\\tan{\\beta} = \\frac{7.2}{6.5} \\approx 1.108'}
              </span>
            </li>
          </ul>
        </CollapsibleWell>
      </ListGroupItem>
      <ListGroupItem>
        <p className="text-justify">
          En el siguiente triángulo, encuentre el valor
          de <span className="math">x</span>.
        </p>
        <Image src={require('./img/ex2.png')}
          rounded responsive style={imageStyle} />
        <CollapsibleWell>
          <p className="text-justify">
            Se conoce la medida del ángulo y el largo su lado opuesto, y se pide
            el largo de la hipotenusa (es decir
            , <span className="math">x</span>). La función trigonométrica que
            relaciona lado opuesto con hipotenusa es el <b>seno</b>, así que
            podemos convertir estos datos en una ecuación:
          </p>
          <div className="math" style={mathDivStyle}>
            {'\\sin(20^\\circ) = \\frac{65}{x}'}
          </div>
          <div className="math" style={mathDivStyle}>
            {'x = \\frac{65}{\\sin(20^\\circ)}'}
          </div>
          <div className="math" style={mathDivStyle}>
            {'x \\approx 190.047'}
          </div>
        </CollapsibleWell>
      </ListGroupItem>
      <ListGroupItem>
        <p className="text-justify">
          En el siguiente triángulo, encuentre el valor
          de <span className="math">y</span>.
        </p>
        <Image src={require('./img/ex3.png')}
          rounded responsive style={imageStyle} />
        <CollapsibleWell>
        <p className="text-justify">
          Se conoce la medida del ángulo y el largo su lado adyacente, y se pide
          el largo del lado opuesto <span className="math">y</span>.
          Como se debe relacionar el lado opuesto con el adyacente, podemos usar
          la función <b>tangente</b> y obtener una ecuación:
        </p>
        <div className='math' style={mathDivStyle}>{'\\tan(55.3^\\circ) = \\frac{y}{10}'}</div>
        <div className='math' style={mathDivStyle}>{'y = 10\\tan(55.3^\\circ)'}</div>
        <div className='math' style={mathDivStyle}>{'y \\approx 14.442'}</div>
        </CollapsibleWell>
      </ListGroupItem>
      <ListGroupItem>
      <p className={'text-justify'}>
        Encuentre el largo de los lados <span className='math'>{'r \\text{ y } s'}</span> indicados
        en la figura.
      </p>
      <Image src={require('./img/ex4.png')} rounded responsive style={imageStyle} />
      <CollapsibleWell>
        <p className={'text-justify'}>
          Nótese que para hallar el largo de la altura <span className='math'>r</span> se
          puede usar el ángulo de 30° y la base del triángulo (con 60 unidades de longitud).
          Para éste ángulo, <span className='math'>r</span> es el lado opuesto y la base es
          el lado adyacente, así que se usa la <b>tangente</b> del ángulo:
        </p>
        <div className='math' style={mathDivStyle}>{'\\tan(30^\\circ) = \\frac{r}{60}'}</div>
        <div className='math' style={mathDivStyle}>{'r = 60\\tan(30^\\circ) \\approx 34.641'}</div>
        <p className={'text-justify'}>
          Ahora que se tiene el valor de <span className='math'>r</span>, se puede usar
          junto con el ángulo de 55° para hallar el largo de la otra base <span className='math'>s</span>,
          notando de nuevo que se tiene el lado opuesto (<span className='math'>r</span>)
          y el lado adyacente (<span className='math'>s</span>) a este ángulo:
        </p>
        <div className='math' style={mathDivStyle}>{'\\tan(55^\\circ) = \\frac{r}{s}'}</div>
        <div className='math' style={mathDivStyle}>
          {'s = \\frac{r}{\\tan(55^\\circ)} \\approx \\frac{34.641}{\\tan(55^\\circ)}'}
        </div>
        <div className='math' style={mathDivStyle}>{'s \\approx 24.256'}</div>
      </CollapsibleWell>
      </ListGroupItem>
    </ListGroup>
  </Panel>
);

export default exercises;
