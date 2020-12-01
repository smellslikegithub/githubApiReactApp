import React from "react"


const Alert = (param) => {

    const {flag, type, msg} = param.toggleAlert;
    console.log(param);

    return (
        flag === true && (
            <div className={`alert alert-${type}`}>
                <i className="fas fa-info-circle"> {msg} </i>
            </div>
        )

    );
}
export default Alert;