import React from "react";
import Analysis from "./Analysis";
import Guess from "./Guess";

class Analyze extends React.Component {
    state = {
        text: "",
        lang: "",
        reRender: false
    };

    analyze = (e) => {
        e.preventDefault();
        if (this.state.text === "" || this.state.lang === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.analyzeHandler({text:this.state.text,lang:this.state.lang});
        this.setState({reRender:!this.state.reRender});
    };

    render() {
        return (
            <div className="container">
                <h2 className="mt-4 text-center">Contextual Frequency Analysis</h2>
                <form onSubmit={this.analyze}>
                    <div className="mb-3 form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Cipher Text"
                            id="text"
                            style={{ height: "200px" }}
                            value={this.state.text}
                            onChange={(e) => this.setState({ text: e.target.value })} />
                        <label htmlFor="text" className="form-label">Cipher Text</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lang" className="form-label">Language</label>
                        <select name="lang" id="lang" className="form-select" value={this.state.lang} onChange={(e) => this.setState({ lang: e.target.value })}>
                            <option value="" disabled defaultValue="">Select Language</option>
                            <option value="TR">Turkish</option>
                            <option value="EN">English</option>
                            <option value="DE">German</option>
                            <option value="FR">French</option>
                            <option value="ES">Spanish</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 mb-5">
                        <button type="submit" className="btn btn-primary btn-lg">Analyze</button>
                    </div>
                </form>
                <Analysis
                    analysis={this.props.analysis}
                />

                <Guess
                    cipherText={this.state.text}
                    analysis={this.props.analysis}
                    predictAlphabet={this.props.predictAlphabet}
                />


            </div>
        );
    }
}

export default Analyze;