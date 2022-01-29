import React from "react";
import { Link } from "react-router-dom";

const ContextCard = (props) => {
    const ctx = props.context;
    return(
        <tr>
            <th scope="row">{ctx.id}</th>
            <th scope="row">{ctx.name}</th>
            <th scope="row">{ctx.language}</th>
            <th scope="row">{JSON.stringify(ctx.letterFrequencies)}</th>
        </tr>
    );
};

export default ContextCard;