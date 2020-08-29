import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value)
    this.setState({ [name]: value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state)
    const {
      displayName, email, password, confirmPassword,
    } = this.state;

    if (password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } =  await auth.createUserWithEmailAndPassword(email, password);

      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch(error){
      console.log(error);
    }
    
  }

  render() {
    const {
      displayName, email, password, confirmPassword,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" onClick={this.handleSubmit}>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;