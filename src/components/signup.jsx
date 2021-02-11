import React, { Component } from "react";

export default class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            password: '',
            mobile: '',
            email: '',
            errors: {
                name: '',
                password: '',
                mobile: '',
                email: '',
            }

        }
    }

    nameChangeHandler = (e) =>{
        this.setState({name: e.target.value});
        let regex_name = /^[A=Za-z0-9]{5,20}$/;

        if(!regex_name.test(this.state.name)){
            this.setState({errors: {name: "Name must contain minimum of 6 characters"}});
        }
        else{
            this.setState({errors: {name: ''}});
        }
    }

    emailChangeHandler = (e) =>{
        this.setState({email: e.target.value});
        let regex_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66}\.([a-z]{2,6}(?:\.[a-z]{2})?))$/i;

        if(!regex_email.test(this.state.email)){
            this.setState({errors: {email: "Not a valid email"}});
        }
        else{
            this.setState({errors: {email: ''}});
        }
    }

    passwordChangeHandler = (e) =>{
        this.setState({password: e.target.value});
        let regex_password = /^[A=Za-z0-9!@#$%^&*()_]{5,20}$/;

        if(!regex_password.test(this.state.password)){
            this.setState({errors: {password: "Pasaword must contain uppercase,lowercase,number"}});
        }
        else{
            this.setState({errors: {password: ''}});
        }
    }

    mobileChangeHandler = (e) =>{
        this.setState({mobile: e.target.value});
        
        if(!this.state.mobile.match(/^(\+\d{1,3}[- ]?)?\d{9}$/) && !(this.state.mobile.match(/0{5,}/))){
            this.setState({errors: {mobile: "Mobile must contain 10 digits"}});
        }
        else{
            this.setState({errors: {mobile: ''}});
        }
    }

    submitButton = (e) =>{
        alert("Form Submitted");
        e.preventDefault();
    }



    render(){
        return(
            <div>
                <form className="form" onSubmit={this.submitButton}>
                    <h1>Signup Form</h1>
                    <label>
                        Name
                    </label>
                    <input type="text" value={this.state.name} onChange={this.nameChangeHandler}/>
                    <span>{this.state.errors.name}</span>

                    <label>
                        Email
                    </label>
                    <input type="text" value={this.state.email} onChange={this.emailChangeHandler}/>
                    <span>{this.state.errors.name}</span>

                    <label>
                        Password
                    </label>
                    <input type="text" value={this.state.password} onChange={this.passwordChangeHandler}/>
                    <span>{this.state.errors.name}</span>

                    <label>
                        Mobile
                    </label>
                    <input type="text" value={this.state.mobile} onChange={this.mobileChangeHandler}/>
                    <span>{this.state.errors.name}</span>

                    <button type="submit">Submit</button>
                </form>
            </div>

        )
    }
}