import * as React from "react";
import './App.css';
import Form from 'react-bootstrap/Form';
import {marked} from "marked";
import {Component} from "react";

class App extends Component {

    state = {
        markdown: ""
    }

    updateMarkdown = (markdown: string): void => {
        this.setState({markdown})
    }

    render() {
        return (
            <div className="App container h-100">
                <div className="row row-cols-1 row-cols-md-2 h-100">
                    <div className="col min-vh-50">
                        <Form.Group controlId="FormControlsTextArea" className="h-75">
                            <h1>Markdown Input</h1>
                            <Form.Control as="textarea" placeholder="Enter Markdown" className="h-100 border border-dark overflow-auto"
                                          value={this.state.markdown}
                                          onChange={(event) => this.updateMarkdown(event.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="col min-vh-50">
                        <h1>Markdown Output</h1>
                        <div className="h-75 border border-dark output overflow-auto"
                             dangerouslySetInnerHTML={{__html: marked.parse(this.state.markdown)}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
