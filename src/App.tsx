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
            <div className="page">
                <div className="page-padding">
                    <div className="row-95h">
                        <div className="input-div half-screen">
                            <div className="input-form-group">
                                <h1 className="heading">Markdown Input</h1>
                                <textarea placeholder="Enter Markdown" className="input-text-area text-area"
                                          value={this.state.markdown}
                                          onChange={(event) => this.updateMarkdown(event.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="output-div half-screen">
                            <h1>Markdown Output</h1>
                            <div className="output-text-area text-area"
                                 dangerouslySetInnerHTML={{__html: marked.parse(this.state.markdown)}}>
                            </div>
                        </div>
                    </div>
                    <div className="syntax-link-div">
                        <a className="syntax-link" href="https://daringfireball.net/projects/markdown/syntax"
                           target="_blank">Syntax Guide</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
