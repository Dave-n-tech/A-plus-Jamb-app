import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./loginPage.scss";

export default function LoginPage() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters!",
      label: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a valid email address",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character",
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,20}$",
      label: "password",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm password",
      errorMessage: "Passwords don't match!",
      label: "confirm password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>login</button>
      </form>
    </section>
  );
}
