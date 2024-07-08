function SubmitButton({ currentStep, numSteps, onSubmitForm }) {
  return (
    <button
      style={{ fontSize: "1rem" }}
      className={currentStep !== numSteps ? "hide" : ""}
      onClick={onSubmitForm}
    >
      Submit
    </button>
  );
}
export default SubmitButton;
