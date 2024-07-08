function NextButton({ currentStep, numSteps, onHandleNext }) {
  return (
    <button
      style={{ fontSize: "1rem" }}
      onClick={onHandleNext}
      className={currentStep >= numSteps ? "hide" : ""}
    >
      Next
    </button>
  );
}
export default NextButton;
