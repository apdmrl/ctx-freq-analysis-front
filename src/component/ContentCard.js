import React from "react";

const ContentCard = (props) => {
    const ctn = props.content;
    const renderLetters = Object.entries(ctn.letterFrequencies).map(([key, value]) => {
        return (
            <th scope="col" key={key}>{key}</th>
        );
    });
    const renderFrequencies = Object.entries(ctn.letterFrequencies).map(([key, value]) => {
        return (
            <td key={key}>{value}%</td>
        );
    });

    return (
        <div className="card mt-2">
            <div className="card-body">
                <h5 className="card-title">{ctn.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Language:{ctn.lang}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Context:{ctn.contextName}</h6>
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

export default ContentCard;