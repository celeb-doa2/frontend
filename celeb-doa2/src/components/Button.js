import React from "react";
import styled from "styled-components";
const Button = (props) => {
     return (
        <button type="button" {...props}>{props.label}</button>
    )
}
export default Button;
