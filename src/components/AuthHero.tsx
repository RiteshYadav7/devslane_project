import React from "react";

interface Props {}

const AuthHero: React.FC<Props> = (props) => {

    return(
        <div className="w-1/2 h-screen text-white bg-black">Logo will go here</div>
    );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);