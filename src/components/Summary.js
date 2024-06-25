function Summary({ newUser }) {
  return (
    <>
      <h2>Summary</h2>
      <p>Username: {newUser.username}</p>
      <p>Password: {newUser.password}</p>
      <p>First name: {newUser.firstname}</p>
      <p>Last name: {newUser.lastname}</p>
      <p>Email: {newUser.email}</p>
      <p>City: {newUser.city}</p>
    </>
  );
}
export default Summary;
