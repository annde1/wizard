function PreviousButton({ currentStep, numSteps, onHandlePrevious }) {
  return (
    <>
      <button
        style={{ fontSize: "1rem", marginRight: "2rem" }}
        disabled={currentStep === 1}
        onClick={onHandlePrevious}
        className={currentStep > numSteps ? "hide" : ""}
      >
        Previous
      </button>
    </>
  );
}
export default PreviousButton;
