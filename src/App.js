import { useState } from "react";
import "./App.css";
import Summary from "./components/Summary";

function App() {
  const [currentStep, setCurrentStep] = useState(1); //init current step
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    city: "",
  }); //init new user

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    personalDetails: "",
  }); //init error

  const numSteps = 4;

  //helper function that validates the current step, will return true or false
  const validateStep = (currentStep) => {
    const errors = {};
    if (currentStep === 1 && !newUser.username) {
      errors.username = "Username is required";
    } else if (currentStep === 2 && !newUser.password) {
      errors.password = "Password is required";
    } else if (currentStep === 3) {
      if (
        !newUser.firstname ||
        !newUser.lastname ||
        !newUser.email ||
        !newUser.city
      ) {
        errors.personalDetails = "All the fields are required";
      }
    }
    setErrors(errors);
    //will return true if there were no error
    return Object.keys(errors).length === 0;
  };
  const handleGoToNext = () => {
    //Need to check if the current step is done
    //Only if validate step returns true we will increase the step
    if (validateStep(currentStep)) {
      setCurrentStep((curr) => curr + 1);
    } else {
      return;
    }
  };

  const handleGoToPrevious = () => {
    setCurrentStep((curr) => curr - 1);
  };

  const handleUserNameChange = (e) => {
    const username = e.target.value;
    setNewUser({ ...newUser, username: username });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewUser({ ...newUser, password: password });
  };

  const handleFirstName = (e) => {
    const firstname = e.target.value;
    setNewUser({ ...newUser, firstname: firstname });
  };

  const handleLastName = (e) => {
    const lastname = e.target.value;
    setNewUser({ ...newUser, lastname: lastname });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setNewUser({ ...newUser, email: email });
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setNewUser({ ...newUser, city: city });
  };

  const handleSubmit = () => {
    setCurrentStep((curr) => curr + 1);
  };
  return (
    <>
      <div className="center">
        {currentStep <= numSteps && (
          <h1>
            Step {currentStep} out of {numSteps}
          </h1>
        )}

        <div>
          {currentStep === 1 && (
            <div className="center">
              <label className="label">Username</label>
              <input
                className="input"
                type="text"
                onChange={handleUserNameChange}
                value={newUser.username}
              />
              {errors && errors.username && <p>{errors.username}</p>}
            </div>
          )}
          {currentStep === 2 && (
            <div className="center">
              <label className="label">Password</label>
              <input
                type="text"
                onChange={handlePasswordChange}
                value={newUser.password}
                className="input"
              />
              {errors && errors.password && <p>{errors.password}</p>}
            </div>
          )}
          {currentStep === 3 && (
            <div className="center">
              <label className="label">First name</label>
              <input
                type="text"
                className="input"
                value={newUser.firstname}
                onChange={handleFirstName}
              />
              <label className="label">Last name</label>
              <input
                type="text"
                className="input"
                value={newUser.lastname}
                onChange={handleLastName}
              />
              <label className="label">Email</label>
              <input
                type="text"
                className="input"
                value={newUser.email}
                onChange={handleEmailChange}
              />
              <label className="label">City</label>
              <input
                type="text"
                className="input"
                value={newUser.city}
                onChange={handleCityChange}
              />
              {errors && errors.personalDetails && (
                <p>{errors.personalDetails}</p>
              )}
            </div>
          )}
          {currentStep === numSteps && <Summary newUser={newUser} />}
        </div>
        <div>
          <button
            style={{ fontSize: "1rem", marginRight: "2rem" }}
            disabled={currentStep === 1}
            onClick={handleGoToPrevious}
            className={currentStep > numSteps ? "hide" : ""}
          >
            Previous
          </button>
          <button
            style={{ fontSize: "1rem" }}
            onClick={handleGoToNext}
            className={currentStep >= numSteps ? "hide" : ""}
          >
            Next
          </button>
          <button
            style={{ fontSize: "1rem" }}
            className={currentStep !== numSteps ? "hide" : ""}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {currentStep > numSteps && (
          <>
            <h1>You form has been submitted</h1>
            <p>Thank you!</p>
          </>
        )}
      </div>
    </>
  );
}

export default App;
