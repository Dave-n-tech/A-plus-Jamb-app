import { useState, useContext } from "react";
import "./loginPage.scss";
import FormInput from "../components/FormInput/FormInput";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import AuthContext from "../helpers/AuthProvider";
const LOGIN_URL = "/account/login";

export default function LoginPage() {
  const { setAuth } = useContext(AuthContext);

  const [errMsg, setErrMsg] = useState("");
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "it must be a valid email",
      label: "email",
      required: true,
    },
    {
      id: 2,
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
  ];

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: info.email, password: info.password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const role = response?.data?.role;

      setAuth({...info})
      // clear state and controlled inputs
      setInfo({
        email: "",
        password: ""
      })
      
      navigate("/dashboard")

    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else {
        setErrMsg("Login Failed");
      }
      console.log(errMsg);
      // alert(errMsg)
    }
    console.log(info)
  };

  const goToResetPassword = () => {
    navigate("/resetPassword");
  };

  return (
    <>
        <section className="formContainer">
          <form onClick={handleFormSubmit}>
            <h1>Welcome Back</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={info[input.name]}
                onChange={handleChange}
              />
            ))}
            <button>login</button>
            <p>
              Forgot your password? <br />
              <span className="reset" onClick={goToResetPassword}>
                Reset password
              </span>
            </p>
          </form>
        </section>
    </>
  );
}
