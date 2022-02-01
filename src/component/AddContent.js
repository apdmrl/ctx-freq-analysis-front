import React from "react";

class AddContent extends React.Component {
    state = {
        name: "",
        file:null,
        lang: "",
        contextName: ""
    };

    handleFile = (e) => {
        let fileContent = e.target.files[0];
        this.setState({file:fileContent})
    };
    
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.lang === "" || this.state.contextName === "" || this.state.file === null) {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContentHandler(this.state);
        this.setState({
            name: "",
            file: null,
            lang: "",
            contextName: ""
        });
        this.props.history.push("/contents");
        //locate to getAllContexts
    };
    render() {
        const renderContextNames = this.props.contexts.filter(ctx => ctx.lang === this.state.lang).map((ctx) => {
            return (
                <option key={ctx.id} value={ctx.name}>{ctx.name}</option>
            );
        });
        return (
            <div className="container">
                <h2 className="text-center">Add Content</h2>
                <form onSubmit={this.add}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            place="Context Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">File</label>
                        <input 
                        className="form-control" 
                        type="file" 
                        id="formFile"
                        onChange={this.handleFile}/>
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
                    <div className="mb-3">
                        <label htmlFor="contextName" className="form-label">Context Name</label>
                        <select name="contextName" id="contextName" className="form-select" value={this.state.contextName} onChange={(e) => this.setState({ contextName: e.target.value })}>
                            <option value="" disabled defaultValue="">Select Context</option>
                            {renderContextNames}
                        </select>
                        {/* <input
                            type="text"
                            className="form-control"
                            name="parentContextName"
                            id="parentContextName"
                            place="Parent Context Name"
                            value={this.state.parentContextName}
                            onChange={(e) => this.setState({ parentContextName: e.target.value })}
                        /> */}
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="submit" className="btn btn-primary me-md-2">Add Content</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddContent;