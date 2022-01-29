import React from "react";

class AddContext extends React.Component{
    state = {
        name: "",
        lang: "TR",
        parentContextName: ""
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.lang === "" || this.state.parentContextName === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContextHandler(this.state);
        this.setState({name:"",lang:"",parentContextName:""});
        //locate to getAllContexts
        this.props.history.push("/getAllContexts");
    };
    render() {
        return (
            <div className="ui main">
                <h2>Add Context</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            place="Context Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            />
                    </div>
                    <div className="field">
                        <label>Language</label>
                        <select name="lang" value={this.state.lang} onChange={(e) => this.setState({lang: e.target.value})}>
                            <option value="TR">Turkish</option>
                            <option value="EN">English</option>
                            <option value="DE">German</option>
                            <option value="FR">French</option>
                            <option value="ES">Spanish</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>ParentContext Name</label>
                        <input
                            type="text"
                            name="parentContextName"
                            place="Parent Context Name"
                            value={this.state.parentContextName}
                            onChange={(e) => this.setState({parentContextName: e.target.value})}
                            />
                    </div>
                    <button className="ui button blue">Add Context</button>
                </form>
            </div>
        );
    }
}

export default AddContext;