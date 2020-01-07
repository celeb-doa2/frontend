import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";



export default function SignUp() {
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

    const ItalicQ = styled.i`
    ${'' /* border: 2px solid black; */}
    font-size: 1em;
    margin: 0.5%; 
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-shadow: 0.5px 0.5px lightgray;
    `;

    const {register, handleSubmit, errors} = useForm();

    const submitFunc = (data) => {
        console.log(data);  {/*you can view user input in console log, confirms data is passed through*/}
    }

    return (
        <FormBox>
        <form onSubmit={handleSubmit(submitFunc)}>
        <Header>Celebrity: Dead or Alive</Header>
        <Tagline>Sign up to keep score and compare with friends!</Tagline>
        <Row><p>
        <ItalicQ><i>Already have an account? </i></ItalicQ>
        <button>Click Here!</button><br/><br/></p></Row>{/*this will link to SignIn*/}
            <p><input type="text" placeholder="Select User Name" ref={register} /></p>
            <p><input type="text" placeholder="Enter Email" name="email" ref={register} /></p>
            <p><input type="password" placeholder="Select Password" name="password" ref={register} /></p>
            <input type="submit" />
        </form>
        </FormBox>
    );
}