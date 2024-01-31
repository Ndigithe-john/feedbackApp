import Aside from "./Aside";
import Button from "./Button";
const Register = () => {
  return (
    <div className="signup">
      <Aside />
      <div className="signup-input">
        <h3>Sign Up</h3>
        <form className="signup-form">
          <div className="name-input">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
          </div>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Registration Number" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <Button>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
