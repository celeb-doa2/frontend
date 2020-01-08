import React from "react";

const Button = (props) => {

    // white & teal buttons, em size - whatever, only for form buttons etc, game buttons will be separate.
    
    return (
        <button>{props.label}</button>
    )
}

export default Button;
