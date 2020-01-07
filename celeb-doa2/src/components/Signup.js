import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";



export default function SignUp() {
    const FormBox = styled.form`
     width: 437px;
     height: 450px;
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
    paddding: 0%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #18E7DD;
    text-shadow: -3px 3px #3A3574;
    -webkit-text-stroke: 0.5px #03E490;    
    `;

    const Row = styled.p`
    align-items: center; 
    text-align: center;
    `;

    const Input = styled.text`
    display: flex; 
    flex-direction: column;
    padding: 2%;
    margin: 2.5%;
    `;

    const ItalicQ = styled.i`
    font-size: 1em;
    color: white;
    margin: 0.5%; 
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-shadow: 1px 1px #3A3574;
    `;

    const {register, handleSubmit, errors} = useForm();

    const submitFunc = (data) => {
        console.log(data);  {/*you can view user input in console log, confirms data is passed through*/}
    }

    return (
        <FormBox>
        <form onSubmit={handleSubmit(submitFunc)}>
        <Logo><a href="https://doa2.netlify.com/"><img src="https://i.imgur.com/Kc4PN2y.png"></img></a></Logo>
        <Tagline>Sign up to keep score and compare with friends!</Tagline>
        <Row><p>
        <ItalicQ><i>Already have an account? </i></ItalicQ>
        <button>Click Here!</button><br/><br/></p></Row>{/*this will link to SignIn*/}
            <Input><input type="text" placeholder="Select User Name" ref={register} /></Input>
            <Input><input type="text" placeholder="Enter Email" name="email" ref={register} /></Input>
            <Input><input type="password" placeholder="Select Password" name="password" ref={register} /></Input>
            <input type="submit" />
        </form>
        </FormBox>
    );
}