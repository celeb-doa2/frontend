import React from "react";
import styled from "styled-components";

const Button = (props) => {

     return (
        <button {...props}>{props.label}</button>
    )
}

export default Button;
