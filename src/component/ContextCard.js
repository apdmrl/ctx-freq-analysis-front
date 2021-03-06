import React from "react";

const ContextCard = (props) => {
    const ctx = props.context;
    const renderLetters = Object.entries(ctx.letterFrequencies).map(([key, value]) => {
        return (
            <th scope="col" key={key}>{key}</th>
        );
    });
    const renderFrequencies = Object.entries(ctx.letterFrequencies).map(([key, value]) => {
        return (
            <td key={key}>{value}%</td>
        );
    });

    return (
        <div className="card mt-2">
            <div className="card-body">
                <h5 className="card-title">{ctx.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Language:{ctx.lang}</h6>
                {ctx.parentContextName && <h6 className="card-subtitle mb-2 text-muted">Parent Context:{ctx.parentContextName}</h6>}
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                {renderLetters}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {renderFrequencies}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ContextCard;