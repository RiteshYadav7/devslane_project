import React from "react";
import avatar from "../../img/avatar.jpeg";

interface Props {}

const Avatar: React.FC<Props> = (props) => {

    return(
        <>
            <img src={avatar} alt="avatar" className="rounded-full" />
        </>
    );
};

Avatar.defaultProps = {};

export default React.memo(Avatar);