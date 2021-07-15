import React from "react";

interface Props {}

const NotFound: React.FC<Props> = (props) => {

    return(
        <div className="bg-red-500 h-screen w-screen">
            Page not found
        </div>
    );
};

NotFound.defaultProps = {};

export default React.memo(NotFound);