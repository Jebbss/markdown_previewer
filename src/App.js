import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

let marked = require("marked");

class App extends Component {

  state = {
    markdown: ""
  }

  updateMarkdown = function(markdown) {
    this.setState({markdown})
  }

  render() {
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="FormControlsTextArea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter Markdown"
            value = {this.state.markdown} onChange = {(event)=>this.updateMarkdown(event.target.value)}
            ></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div className = "border border-dark" dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
