import React from "react";
import hero from "../img/hero.webp";

interface Props {}

const AuthHero: React.FC<Props> = (props) => {
  return (
    <div className="w-1/2 h-screen bg-black flex items-center">
      <div className="h-2/3 w-2/3 mx-auto relative">
        <img src={hero} className="absolute" alt="herologo" />
      </div>
    </div>
  );
};

AuthHero.defaultProps = {};

export default React.memo(AuthHero);
