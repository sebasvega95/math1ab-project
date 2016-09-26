import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import {Link} from 'react-router';
import React from 'react';

export default class Contents extends React.Component {
  render() {
    return (
      <Panel bsStyle="primary" title="Elija un tema">
        <ListGroup>
          <Link to="/">
            <ListGroupItem>
              Teoría de conjuntos
            </ListGroupItem>
          </Link>
            <Link to="topics/trigonometry-intro">
              <ListGroupItem>
                Indroducción a la trigonometría
              </ListGroupItem>
            </Link>
        </ListGroup>
      </Panel>
    );
  }
}
