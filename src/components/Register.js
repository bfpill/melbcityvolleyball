import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebaseConfig";
import "./Register.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("unselected");

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const register = () => {
    if (!name) alert("Please enter a name");
    else if (!email) alert("Please enter an email");
    else if (!gender) alert("Please enter Gender");
    else if (!age) alert("Please enter Age");
    else if (!password) alert("Please enter a Password");
    else if (experience === "unselected")
      alert("Please select an experience level");

    user = registerWithEmailAndPassword(name, email, password);
    loading = true;
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <div className="registerTitle">Create a Vic Grass Player Account:</div>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          className="register__textBox"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
        <input
          type="text"
          className="register__textBox"
          value={age}
          pattern="[0-9]*"
          maxLength="2"
          onChange={(e) => {
            const charCode = e.which ? e.which : e.keyCode;
            if (charCode < 48 || charCode > 57) {
              e.preventDefault();
            }
            setAge(e.target.value);
          }}
          placeholder="Age"
        />
        <div className="register__skill__textbox">
          {" "}
          Select your skill level:
        </div>
        <div className="experience__options">
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="beginner"
              checked={experience === "beginner"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Beginner</span>
          </label>
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="intermediate"
              checked={experience === "intermediate"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Intermediate</span>
          </label>
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="advanced"
              checked={experience === "advanced"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Advanced</span>
          </label>
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="expert"
              checked={experience === "expert"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Expert</span>
          </label>
        </div>
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
