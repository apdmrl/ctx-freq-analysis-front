import React from "react";
import ContextCard from "./ContextCard";
import CipherCard from "./CipherCard";

const Analysis = (props) => {
    if(!props.analysis){
        return null;
    }
    const renderContextList = props.analysis? props.analysis.contextsList.slice(0,5).map((ctx) => {
        return (
            <ContextCard
                context={ctx}
                key={ctx.id} />
        );
    }):null;
    return (
        <div className="row">
            <CipherCard
                cipher={props.analysis}
            />
            <h2 className="mt-3 text-center">
                Compatible Contexts
            </h2>
            {renderContextList}
        </div>
    );
};

export default Analysis;