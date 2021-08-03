import React from "react";

interface Props {}

const Profile: React.FC<Props> = (props) => {

    return(
        <div className="h-screen w-full">
            <h1>hello</h1>
        </div>
    );
};

Profile.defaultProps = {};

export default React.memo(Profile);