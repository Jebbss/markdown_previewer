import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import { marked } from 'marked';

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
          <Form.Group controlId="FormControlsTextArea">
            <Form.Label>Markdown Input</Form.Label>
            <Form.Control componentClass="textarea" placeholder="Enter Markdown"
            value = {this.state.markdown} onChange = {(event)=>this.updateMarkdown(event.target.value)}
            ></Form.Control>
          </Form.Group>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div className = "border border-dark output" dangerouslySetInnerHTML = {{__html: marked.parse(this.state.markdown)}}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
