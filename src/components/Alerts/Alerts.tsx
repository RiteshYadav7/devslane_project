import React from "react";
import { HiX } from "react-icons/hi";

interface Props {}

const Alerts: React.FC<Props> = (props) => {

    return(
        <div className="bg-blue-200 rounded text-blue-600 mb-4" role="alert">
            <p><strong>Primary!</strong> Lorem Ipsum is simply dummy text of the printing.
            <button type="button" className="align-middle" data-dismiss="alert" aria-label="Close"><HiX /></button></p>
        </div>
    );
};

Alerts.defaultProps = {};

export default React.memo(Alerts);