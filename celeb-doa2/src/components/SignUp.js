import React from "react";
import useForm from "react-hook-form";


export default function SignUp() {
    const {register, handleSubmit, errors} = useForm();

    const submitFunc = (data) => {
        console.log(data);  {/*you can view user input in console log, confirms data is passed through*/}
    }

    return (
        <form onSubmit={handleSubmit(submitFunc)}>
        <h1>Celebrity: Dead or Alive</h1>
        <h3>Sign up to keep score and compare with friends!</h3>
        <p><i>Already have an account? </i></p>
        <button>Click Here!</button><br/>   {/*this will link to SignIn*/}
            <input type="text" placeholder="Select User Name" ref={register} />
            <input type="text" placeholder="Enter Email" name="email" ref={register} />
            <input type="password" placeholder="Select Password" name="password" ref={register} />
            <input type="submit" />
        </form>
    );
}