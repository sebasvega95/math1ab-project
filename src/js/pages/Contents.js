import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import {Link} from 'react-router';
import React from 'react';

export default class Contents extends React.Component {
  render() {
    return (
      <Panel bsStyle="primary" title="Elija un tema">
        <ListGroup>
            <ListGroupItem>
              <Link to="topics/set-theory">
                Teoría de conjuntos
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/exponents-radicals">
                Exponentes y radicales
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/linear-equations">
                Ecuaciones e inecuaciones lineales
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/polynomials">
                Polinomios
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/quadradic-equations">
                Ecuaciones e inecuaciones cuadráticas
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/cartesian-plane">
                Plano cartesiano y secciones cónicas
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/functions">
                Funciones
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/exponential-logarithms">
                Exponenciales y logaritmos
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/trigonometry-intro">
                Introducción a la trigonometría
              </Link>
            </ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}
