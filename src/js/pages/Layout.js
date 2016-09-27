import {Col, Grid, Row} from 'react-bootstrap';
import React from 'react';

const rowStyle = {
  background: 'white',
  boxShadow: '10px 10px 5px grey',
  height: '100%'
};

const h1Style = {
  color: 'rgb(24, 69, 147)',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
};

export default class Layout extends React.Component {
  render() {
    const containerSize = 8;
    const containerOffset = (12 - containerSize) / 2;

    return (
      <Grid>
        <Row style={rowStyle}>
          <Col lg={containerSize} lgOffset={containerOffset}
            md={containerSize} mdOffset={containerOffset}>
            <h1 className="text-center" style={h1Style}>
              Departamento de matemáticas
            </h1>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
