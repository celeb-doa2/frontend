import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";


const SignIn = () => {
    const FormBox = styled.form`
     width: 450px;
     height: 340px;
     padding: 10px;
     border: 1px soild black;
     background-color: white;
     border-radius: 5px;
     margin: 10px;
     align-items: center;
     box-shadow: -5px 5px 15px grey;
     `;

    const Logo = styled.a`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 50%;      
    `;
    
    const Tagline = styled.h3`
    font-size: 1.5em;
    text-align: center;
    line-height: 1;
    paddding: 0%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #18E7DD;
    text-shadow: -2px 0.5px lightgray;
    -webkit-text-stroke: 0.5px #03E490;    
    `;

    const Row = styled.p`
    align-items: center; 
    ${'' /* border: 2px solid red; */}
    text-align: center;
    `;

    const {signin, handleSubmit, errors} = useForm();

    const submitData = (data) => {
        console.log(data);  
    }
    return (
        <div>
            <FormBox>
                <form onSubmit={handleSubmit(submitData)}>
                <Logo><a href="https://doa2.netlify.com/"><img src="https://i.imgur.com/Kc4PN2y.png"></img></a></Logo>
                <Tagline>Ready to Play?!</Tagline>
                    <p><input type="text" placeholder="Username" ref={signin}/></p>
                    <p><input type="text" placeholder="Password" ref={signin}/></p>
                <Button label="Sign In" />
                </form>
            </FormBox>
        </div>
    )

}

export default SignIn;
