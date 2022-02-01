import React from "react";
import { Link } from "react-router-dom";
import ContentCard from "./ContentCard";

const ContentList = (props) => {
    const renderContentList = props.contents.map((ctn) => {
        return (
            <ContentCard
                content={ctn}
                key={ctn.id} />
        );
    });

    return (
        <div className="row">
            <h2 className="text-center">
                Content List
            </h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/addContent">
                    <button type="button" className="btn btn-primary me-md-2">Add Content</button>
            </Link>
            </div>
            {renderContentList}     
        </div>
    );
};

export default ContentList;