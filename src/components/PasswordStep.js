function PasswordStep({ newUser, passwordError, onPasswordChange }) {
  return (
    <>
      <div className="center">
        <label className="label">Password</label>
        <input
          type="text"
          onChange={onPasswordChange}
          value={newUser.password}
          className="input"
        />
        {passwordError && <p>{passwordError}</p>}
      </div>
    </>
  );
}
export default PasswordStep;
