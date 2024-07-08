import { useState } from "react";
import FormSteps from "./FormSteps";
function Wizard() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    city: "",
  }); //init new user
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

  return (
    <>
      <FormSteps
        newUser={newUser}
        onUserNameChange={handleUserNameChange}
        onPasswordChange={handlePasswordChange}
        onFirstnameChange={handleFirstName}
        onLastnameChange={handleLastName}
        onEmailChange={handleEmailChange}
        onCityChange={handleCityChange}
      />
    </>
  );
}
export default Wizard;
