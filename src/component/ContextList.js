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
        <div className="row">
            <h2 className="text-center">
                Context List
            </h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/addContext">
                    <button type="button" className="btn btn-primary me-md-2">Add Context</button>
            </Link>
            </div>
            {renderContextList}     
        </div>
    );
};

export default ContextList;