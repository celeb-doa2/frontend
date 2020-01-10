import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";
import axios from "axios";

const SignIn = () => {
    const FormBox = styled.form`
     width: 437px;
     height: 320px;
     padding: 2%;
     background-color: #7F74FF;
     border-radius: 10px;
     margin: 2%;
     align-items: center;
     box-shadow: -5px 5px 15px #3A3574;
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
    padding: 0%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #18E7DD;
    text-shadow: -3px 3px #3A3574;
    -webkit-text-stroke: 0.5px #03E490;    
    `;

    const Input = styled.text`
    display: flex; 
    flex-direction: column;
    padding: 2%;
    margin: 2.5%;
    `;

    const {register, handleSubmit, errors} = useForm();

    const submitData = (data) => {
        console.log(data);

        axios
            .post('/auth/login', data)
            .then(res => console.log('LOGIN: ', res))
            .catch(err => console.log('LOGIN ERROR: ', err));
    }
    return (
        <div>
            <FormBox>
                <form onSubmit={handleSubmit(submitData)}>
                <Logo><a href="https://doa2.netlify.com/"><img src="https://i.imgur.com/Kc4PN2y.png"></img></a></Logo>
                <Tagline>Ready to Play?!</Tagline>
                <Input><input type="text" placeholder="Username" name="username" ref={register}/></Input>
                <Input><input type="password" placeholder="Password" name="password" ref={register}/></Input> 
                <Button type="submit" label="Sign In" />
                </form>
            </FormBox>
        </div>
    )
}

export default SignIn;
