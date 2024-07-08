import { useState } from "react";
import UsernameStep from "./UsernameStep";
import PasswordStep from "./PasswordStep";
import UserDetailsStep from "./UserDetailsStep";
import Summary from "./Summary";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import SubmitButton from "./SubmitButton";
function FormSteps({
  newUser,
  onUserNameChange,
  onPasswordChange,
  onFirstnameChange,
  onLastnameChange,
  onEmailChange,
  onCityChange,
}) {
  const [currentStep, setCurrentStep] = useState(1); //init current step
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    personalDetails: "",
  }); //init error

  const numSteps = 4;

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

  const handleSubmit = () => {
    setCurrentStep((curr) => curr + 1);
  };
  return (
    <>
      {currentStep <= numSteps && (
        <h1>
          Step {currentStep} out of {numSteps}
        </h1>
      )}
      {currentStep === 1 && (
        <UsernameStep
          newUser={newUser}
          onUserNameChange={onUserNameChange}
          usernameError={errors.username}
        />
      )}
      {currentStep === 2 && (
        <PasswordStep
          newUser={newUser}
          onPasswordChange={onPasswordChange}
          passwordError={errors.password}
        />
      )}
      {currentStep === 3 && (
        <UserDetailsStep
          newUser={newUser}
          userDetailsError={errors.personalDetails}
          onFirstnameChange={onFirstnameChange}
          onLastnameChange={onLastnameChange}
          onEmailChange={onEmailChange}
          onCityChange={onCityChange}
        />
      )}
      {currentStep === numSteps && <Summary newUser={newUser} />}
      <div>
        <PreviousButton
          currentStep={currentStep}
          numSteps={numSteps}
          onHandlePrevious={handleGoToPrevious}
        />
        <NextButton
          currentStep={currentStep}
          numSteps={numSteps}
          onHandleNext={handleGoToNext}
        />
        <SubmitButton
          currentStep={currentStep}
          numSteps={numSteps}
          onSubmitForm={handleSubmit}
        />
      </div>
      {currentStep > numSteps && (
        <>
          <h1>You form has been submitted</h1>
          <p>Thank you!</p>
        </>
      )}
    </>
  );
}
export default FormSteps;
