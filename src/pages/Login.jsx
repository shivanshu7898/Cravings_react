import React, { useState } from "react";
import deliveryboy from "../assets/deliberyboy.png";
import foodTable from "../assets/foodTable.png";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send loginData to the server
    //Validate loginData

    console.log("Login data submitted:", loginData);

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };
  };

  return (
    <>
      <div className="">
        <div className="relative w-full h-screen">
          <img src={foodTable} alt="Food Table"className="w-full h-full object-cover "/>
        </div>
        <div className="w-md bg-(--background) rounded shadow p-10 flex flex-col justify-center">
          

          <form onSubmit={handleSubmit} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl w-[400px]">
          <div className="flex justify-center text-2xl">Welocome Back!</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
              required
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="password">Password</label>
              <input
              required
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--accent)"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;