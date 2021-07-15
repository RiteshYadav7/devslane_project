import React from "react";
import hero from "../img/hero.webp";

interface Props {}

const AuthHero: React.FC<Props> = (props) => {
  return (
    <div className="w-1/2 h-screen bg-black flex items-center">
        <img src={hero} className="h-1/2 mx-auto" />
    </div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
