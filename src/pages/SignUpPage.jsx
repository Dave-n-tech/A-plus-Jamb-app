import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput/FormInput";
import "./signupPage.scss";
import axios from "../api/axios";
const REGISTER_URL = "/account/register";

export default function SignUpPage() {
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

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
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,20}$",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          username: values.username,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // const role = response?.data?.role;

      alert("Account created successfully");
      setValues({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Username taken");
      } else {
        setErrMsg("Signup Failed");
      }
      console.log(errMsg);
      console.error("Error", err.request.response);
    }

    console.log(values);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      {success ? (
        <section className="formContainer">
          <h1>Account has been created</h1>
          <p onClick={goToLogin}>Sign in</p>
        </section>
      ) : (
        <section className="formContainer">
          <form onSubmit={handleSubmit}>
            <span className={errMsg && "error"}>{errMsg}</span>
            <h1>Welcome</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={handleChange}
              />
            ))}
            <button className="loginbtn">signup</button>
            <p>
              Already have an account?{" "}
              <span className="signin" onClick={goToLogin}>
                Sign in
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
}
