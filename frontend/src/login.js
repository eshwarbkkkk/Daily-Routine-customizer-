import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./api/auth";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await loginUser(formData);
      if (response?.status === 200) {
        console.log(response?.data);
        localStorage.setItem("at", response?.data?.token);
        navigate("/product");
        // const key = localStorage.getItem('at')
      } else {
        console.log("Failed to send data : ", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <section class="text-gray-400 bg-gray-900 h-screen flex items-center justify-center">
        <div class="container lg:w-5/3 flex items-center justify-center">
          <form
            class="lg:w-1/3 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0"
            onSubmit={handleSubmit}
          >
            <h2 class="text-white text-lg font-medium title-font mb-5">
              Login
            </h2>
            <div class="relative mb-4">
              <label for="username" class="leading-7 text-sm text-gray-400">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <Link to="/">Login</Link>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
