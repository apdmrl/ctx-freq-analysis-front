import React from "react";
import { Link } from "react-router-dom";
import ContextCard from "./ContextCard";

const ContextList = (props) => {
    const renderContextList = props.contexts.map((ctx) => {
        return (
            <ContextCard
                context={ctx}
                key={ctx.id} />
        );
    });

    return (
        <div className="main">
            <h2>
                Context List
                <Link to="/addContext">
                    <button className="ui button blue right">Add Context</button>
                </Link>
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Language</th>
                        <th scope="col">letterFrequencies</th>
                    </tr>
                </thead>
                <tbody>
                    {renderContextList}
                </tbody>
            </table>
        </div>
    );
};

export default ContextList;