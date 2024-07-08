function UsernameStep({ newUser, usernameError, onUserNameChange }) {
  return (
    <>
      <div className="center">
        <label className="label">Username</label>
        <input
          className="input"
          type="text"
          onChange={onUserNameChange}
          value={newUser.username}
        />
        {usernameError && <p>{usernameError}</p>}
      </div>
    </>
  );
}
export default UsernameStep;
