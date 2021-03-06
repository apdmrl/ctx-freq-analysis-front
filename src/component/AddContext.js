import React from "react";

class AddContext extends React.Component {
    state = {
        name: "",
        lang: "",
        parentContextName: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.lang === "" || this.state.parentContextName === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContextHandler(this.state);
        this.setState({ name: "", lang: "", parentContextName: "" });
        this.props.history.push("/contexts");
        //locate to getAllContexts
    };
    render() {
        const renderParentContextNames = this.props.contexts.filter(c => c.lang === this.state.lang).map((ctx) => {
            return (
                <option key={ctx.id} value={ctx.name}>{ctx.name}</option>
            );
        });
        return (
            <div className="container">
                <h2 className="text-center">Add Context</h2>
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
                        <label htmlFor="parentContextName" className="form-label">Parent Context Name</label>
                        <select name="parentContextName" id="parentContextName" className="form-select" value={this.state.parentContextName} onChange={(e) => this.setState({ parentContextName: e.target.value })}>
                            <option value="" disabled defaultValue="">Select Parent Context</option>
                            {renderParentContextNames}
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
                        <button type="submit" className="btn btn-primary me-md-2">Add Context</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default AddContext;