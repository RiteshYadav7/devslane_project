import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {

    return(
        <div>
            This is Dashboard Page.
            <Link to="/recordings">Go to recordings</Link>
        </div>
    );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);