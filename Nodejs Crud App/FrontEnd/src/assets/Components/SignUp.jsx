import React from "react";
import { Await, Link, useState } from "react-router-dom";

function SignUp() {
  const [Form, setForm] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Password: "",
  });

  const HandleValueChange = (e) => {
    setForm({
      ...Form,
      [e.target.Name]: e.target.value,
    });
  };

  const SubmitValue = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/login", {
        method: "POST",
        headers: {
          "Content-Type": "appication/json",
        },
        body: JSON.stringify(Form),
      });
      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error:  ${errorData.message}`);
      } else {
        const Data = await response.json();
        setForm({
          Name: "",
          Phone: "",
          Email: "",
          Password: "",
        });
        alert("Signup Successfully", Data);
      }
    } catch (error) {
      console.log(error);
      alert("An Error occurred while singing up.");
    }
  };

  return (
    <>
      <h1> SignUp Page</h1>
      <form>
        <div className="ContainerDiv ">
          <div className="ParentMain">
            <div className="ParentContent">
              <div className="Content">
                <div className="HeadingDiv">
                  <h1>SignUp</h1>
                </div>
                <div className="inputDiv">
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={Form.Name}
                    onChange={HandleValueChange}
                  />{" "}
                  <br />
                  <input
                    type="phone"
                    placeholder="Phone"
                    name="Phone"
                    value={Form.Phone}
                    onChange={HandleValueChange}
                  />{" "}
                  <br />
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    value={Form.Email}
                    onChange={HandleValueChange}
                  />{" "}
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    value={Form.Password}
                    onChange={HandleValueChange}
                  />{" "}
                  <br />
                </div>
                <div className="ButtonDiv">
                  <button type="submit">SignUp</button>
                </div>

                <p className="mt-10 text-center text-sm/6 text-gray-500">
               Already Have an Account
            <Link to="/Login" className="font-semibold text-indigo-600 hover:text-indigo-500">
           Login
            </Link>
          </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
