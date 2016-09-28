import {Button, Tab, Tabs} from 'react-bootstrap';
import $ from 'jquery';
import React from 'react';
import katex from 'katex';
import trigExercises from '../contents/trig_intro/exercises';
import trigProblems from '../contents/trig_intro/problems';
import trigTheory from '../contents/trig_intro/theory';

const topics = {
  'trigonometry-intro': {
    exercises: trigExercises,
    problems: trigProblems,
    theory: trigTheory
  }
};

const tabStyle = {outline: 0}

export default class Topic extends React.Component {
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
    const topic = topics[this.props.params.topic];

    return (
      <div>
        <Tabs defaultActiveKey={0} id="topic-tabs" style={tabStyle}>
          <Tab eventKey={0} title="Lección" style={tabStyle}>
            {topic.theory}
          </Tab>
          <Tab eventKey={1} title="Ejercicios" style={tabStyle}>
            {topic.exercises}
          </Tab>
          <Tab eventKey={2} title="Problemas" style={tabStyle}>
            {topic.problems}
          </Tab>
        </Tabs>
      </div>
    );
  }
}
