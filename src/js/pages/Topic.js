import {Tab, Tabs} from 'react-bootstrap';
import $ from 'jquery';
import React from 'react';
import katex from 'katex';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    const wip = <p>Estamos trabajando en esta sección!</p>;

    try {
      this.exercises = require(`../contents/${this.props.params.topic}/exercises`);
    } catch (e) {
      this.exercises = wip;
    }
    try {
      this.problems = require(`../contents/${this.props.params.topic}/problems`);
    } catch (e) {
      this.problems = wip;
    }
    try {
      this.theory = require(`../contents/${this.props.params.topic}/theory`);
    } catch (e) {
      this.theory = wip;
    }
  }

  componentDidMount() {
    $('.math').each(function() {
      const texTxt = $(this).text();
      const el = $(this).get(0);
      let addDisp = '';

      if (el.tagName.toString() === 'DIV') {
        addDisp = '\\displaystyle ';
      }
      try {
        katex.render(addDisp + texTxt, el);
      } catch (err) {
        $(this).html(`<span class="err">${err}</span>`);
      }
    });
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={0} id="topic-tabs">
          <Tab eventKey={0} title="Lección">
            {this.theory}
          </Tab>
          <Tab eventKey={1} title="Ejercicios">
            {this.exercises}
          </Tab>
          <Tab eventKey={2} title="Problemas">
            {this.problems}
          </Tab>
        </Tabs>
      </div>
    );
  }
}
