import React from "react";

interface Props {}

const Login.page: React.FC<Props> = (props) => {

    return(
        <div>
            Login page.
        </div>
    );
};

Login.page.defaultProps = {};

export default React.memo(Login.page);