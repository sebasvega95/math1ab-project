import {Col, Grid, Nav, NavItem, Navbar, Row} from 'react-bootstrap';
import {Link} from 'react-router';
import React from 'react';

const gridStyle = {minHeight: '100%'};

const rowStyle = {
  background: 'white',
  border: '0px 1px solid gray',
  boxShadow: '0 10px 10px rgb(57, 170, 218)',
  minHeight: '100%'
};

const h1Style = {
  color: 'rgb(24, 69, 147)',
  fontSize: '350%',
  padding: '0 0 50px 0',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
};

const utpStyle = {padding: 15};

export default class Layout extends React.Component {
  render() {
    const containerSize = 8;
    const containerOffset = (12 - containerSize) / 2;

    return (
      <Grid style={gridStyle}>
        <Row style={rowStyle}>
          <Col lg={containerSize} lgOffset={containerOffset}
            md={containerSize} mdOffset={containerOffset}>
            <img src="assets/img/marca_UTP.png" style={utpStyle} />
            <h1 className="text-center" style={h1Style}>
              Departamento de matemáticas
            </h1>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  Navegación
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem eventKey={1}>
                  <Link to="/">Lista de contenidos</Link>
                </NavItem>
              </Nav>
            </Navbar>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
