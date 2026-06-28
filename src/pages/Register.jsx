import React, { useState } from "react";
import deliveryboy from "../assets/deliberyboy.png";
import foodTable from "../assets/foodTable.png";
import api from "../config/api.config.js"

const Register= () => {
  const [RegisterData, setRegisterData] = useState({
   
    FullName: "",
    number: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle register logic here, e.g., send registerData to the server
    //Validate registerData

    console.log("Register data submitted:", RegisterData);

    const payload = {
      FullName: RegisterData.FullName,
      number: RegisterData.number,
      email: RegisterData.email.toLowerCase(),
      password: RegisterData  .password,
      confirmPassword: RegisterData  .password,
    };

    try {
const res = await api.post("/auth/register",payload);
alert(res)
      
    } catch (error) {
      console.log(error.message);
      
      
    }
  };

  return (
    <>
      <div className="">
        <div className="relative w-full h-screen">
          <img src={foodTable} alt="" className="w-full h-full object-cover " />
        </div>
        <div className="">
         

          <form onSubmit={handleSubmit}className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-xl w-[400px]">
           <div>Register Here</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="FullName">Full Name</label>
              <input
                type="text"
                id="FullName"
                name="FullName"
                value={RegisterData.FullName}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="number">Phone Number</label>
              <input
              required
                type="tel"
                id="number"
                name="number"
                value={RegisterData .number}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={RegisterData.email}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
             <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={RegisterData.password}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>
             <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={RegisterData.confirmPassword}
                onChange={handleChange}
                className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)"
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--accent)"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;