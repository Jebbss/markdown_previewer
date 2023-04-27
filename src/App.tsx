import * as React from "react";
import './App.css';
import {marked} from "marked";
import {Component} from "react";

class App extends Component {

    state = {
        markdown: "# Title \n***Enter Markdown***"
    }

    updateMarkdown = (markdown: string): void => {
        this.setState({markdown})
    }

    render() {
        return (
            <div className="page-div">
                <div className="markdown-divs">
                    <div className="input-div">
                        <div className="input-form-group">
                            <h1>Markdown Input</h1>
                            <textarea placeholder="Enter Markdown" className="input-text-area"
                                          value={this.state.markdown}
                                          onChange={(event) => this.updateMarkdown(event.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="output-div">
                        <h1>Markdown Output</h1>
                        <div className="output-text-area"
                             dangerouslySetInnerHTML={{__html: marked.parse(this.state.markdown)}}>
                        </div>
                    </div>
                </div>
                <div className="syntax-link-div">
                    <a href="https://daringfireball.net/projects/markdown/syntax">Syntax</a>
                </div>
            </div>
        );
    }
}

export default App;
