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

    const Header = styled.h1`
    color: #1D16C5;
    font-size: 3em;
    font-family: 'Staatliches', cursive;
    line-height: 0.9;
    box-shadow: -5px 5px 10px lightgray;
    text-align: center;  
    margin: 10px 10px 0px 10px;  
    background-color: #FDFD71;
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

    const {signIn, handleSubmit, errors} = useForm();

    const submitData = (data) => {
        console.log(data);  
    }
    return (
        <div>
            <FormBox>
                <form onSubmit={handleSubmit(submitData)}>
                <Header>Celebrity: Dead or Alive</Header>
                <Tagline>Ready to Play?!</Tagline>
                    <p><input type="text" placeholder="Username" ref={signIn}/></p>
                    <p><input type="text" placeholder="Password" ref={signIn}/></p>
                <Button label="Sign In" />
                </form>
            </FormBox>
        </div>
    )

}

export default SignIn;