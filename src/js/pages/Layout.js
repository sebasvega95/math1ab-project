import {Col, Grid, Row} from 'react-bootstrap';
import React from 'react';

const rowStyle = {
  background: 'white',
  boxShadow: '10px 10px 5px grey',
  height: '100%'
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
            <h1 className="text-center">Departamento de matemáticas</h1>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}
