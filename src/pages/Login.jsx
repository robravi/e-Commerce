import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Login = () => {

function generateUniqueRandomString(length = 16) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 for compactness
  let randomStr = '';

  for (let i = 0; i < length; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return `${timestamp}-${randomStr}`; // ✅ Use backticks for template string
}

const handleIdentify = () => {  // ✅ Fixed function syntax (was incorrect)
  console.log("coming here" );
  const id = generateUniqueRandomString(10);
  console.log("id", id);

  uzera("identify", {
    id: id,
    userData: {
      name: "John Doe",
      email: "john@example.com",
      join_date: "2023-05-17T08:42:25.253Z",
      plan: "Startup",
      purchased_at: "2023-05-17T08:42:25.253Z",
      role: "Manager",
      account_id: "1234XYZ",
      company_name: "Acme Corp",
      renewal_date: "2023-05-17T08:42:25.253Z",
    },
  });
};

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                   onClick={handleIdentify}
                  
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
