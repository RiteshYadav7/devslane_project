import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = (props) => {

    return(
        <div>
            Login page.
            Don't have an account.
            <Link to="/signup">Click here</Link>

            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    );
};

Login.defaultProps = {};

export default React.memo(Login);