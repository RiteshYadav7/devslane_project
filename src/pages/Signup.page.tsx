import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Signup: React.FC<Props> = (props) => {

    return(
        <div>
            Signup page.
            Already have an account.
            <Link to="/login">Click here</Link>
        </div>
    );
};

Signup.defaultProps = {};

export default React.memo(Signup);