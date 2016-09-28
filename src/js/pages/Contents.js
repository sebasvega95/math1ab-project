import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import {Link} from 'react-router';
import React from 'react';

export default class Contents extends React.Component {
  render() {
    return (
      <Panel bsStyle="primary" title="Elija un tema">
        <ListGroup>
            <ListGroupItem>
              <Link to="/">
                Teoría de conjuntos
              </Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="topics/trigonometry-intro">
                Indroducción a la trigonometría
              </Link>
            </ListGroupItem>
        </ListGroup>
      </Panel>
    );
  }
}
