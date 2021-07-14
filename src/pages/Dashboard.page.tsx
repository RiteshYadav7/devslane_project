import React from "react";

interface Props {}

const Dashboard.page: React.FC<Props> = (props) => {

    return(
        <div>
            This is Dashboard Page.
        </div>
    );
};

Dashboard.page.defaultProps = {};

export default React.memo(Dashboard.page);