import {Col, Grid, Nav, NavItem, Navbar, Row} from 'react-bootstrap';
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
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelect(selectedKey) {
    switch (selectedKey) {
      case 1:
        this.context.router.push('/');
        break;
      case 2:
        window.location.assign('./index.html');
        break;
      default:
        this.context.router.push('/');
    }
  }

  handleClick() {
    this.context.router.push('/');
  }

  render() {
    const containerSize = 10;
    const containerOffset = (12 - containerSize) / 2;

    return (
      <Grid style={gridStyle}>
        <Row style={rowStyle}>
          <Col lg={containerSize} lgOffset={containerOffset}
            md={containerSize} mdOffset={containerOffset}>
            <img src="assets/img/marca_UTP.png" style={utpStyle} />
            <h1 className="text-center" style={h1Style}>
              Matemáticas 1A
            </h1>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  Navegación
                </Navbar.Brand>
              </Navbar.Header>
              <Nav onSelect={this.handleSelect}>
                <NavItem eventKey={2}>Inicio</NavItem>
                <NavItem eventKey={1}>Lista de contenidos</NavItem>
              </Nav>
            </Navbar>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

Layout.contextTypes = {router: React.PropTypes.object.isRequired};
