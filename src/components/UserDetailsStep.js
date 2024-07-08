function UserDetailsStep({
  newUser,
  onFirstnameChange,
  onLastnameChange,
  onEmailChange,
  onCityChange,
  userDetailsError,
}) {
  return (
    <>
      <div className="center">
        <label className="label">First name</label>
        <input
          type="text"
          className="input"
          value={newUser.firstname}
          onChange={onFirstnameChange}
        />
        <label className="label">Last name</label>
        <input
          type="text"
          className="input"
          value={newUser.lastname}
          onChange={onLastnameChange}
        />
        <label className="label">Email</label>
        <input
          type="text"
          className="input"
          value={newUser.email}
          onChange={onEmailChange}
        />
        <label className="label">City</label>
        <input
          type="text"
          className="input"
          value={newUser.city}
          onChange={onCityChange}
        />
        {userDetailsError && <p>{userDetailsError}</p>}
      </div>
    </>
  );
}
export default UserDetailsStep;
