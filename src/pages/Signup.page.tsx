import React from "react";

interface Props {}

const Signup.page: React.FC<Props> = (props) => {

    return(
        <div>
            Signup page.
        </div>
    );
};

Signup.page.defaultProps = {};

export default React.memo(Signup.page);