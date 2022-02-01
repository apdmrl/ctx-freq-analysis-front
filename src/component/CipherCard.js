import React from "react";

const CipherCard = (props) => {
    const cipher = props.cipher;
    const renderLetters = cipher ? Object.entries(cipher.letterFrequencies).map(([key, value]) => {
        return (
            <th scope="col" key={key}>{key}</th>
        );
    }): null;
    const renderFrequencies = cipher ? Object.entries(cipher.letterFrequencies).map(([key, value]) => {
        return (
            <td key={key}>{value}%</td>
        );
    }): null;

    return (
        <div>
            <h2 className="text-center">
                Frequencies of Cipher Text
            </h2>
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
    );
};

export default CipherCard;
