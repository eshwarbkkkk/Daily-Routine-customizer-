import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeroImage from "./assets/image.png";

export default function Landing() {
  const navigate = useNavigate("/login");

  const [key, setKey] = useState("");

  useEffect(() => {
    const key = localStorage.getItem("at");

    if (key) {
      setKey(key);
    }
  }, []);
  return (
    <>
      <div>
        <section class="text-gray-400 bg-gray-900 body-font pb-20 pl-10 pr-10">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                We help people Excel
              </h1>
              <p class="mb-5 leading-relaxed">
                We strive to offer compassionate, individualized solutions that
                empower individuals to enhance their well-being and overall
                quality of life. Our commitment is to facilitate positive change
                in the lives of individuals, contributing to the development of
                a more productive and harmonious society.
              </p>
              <div
                class={`flex justify-center mt-2 ${
                  key == null ? "hidden" : "visible"
                }`}
              >
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  <Link to="/signup">Get started</Link>
                </button>
                <button class="ml-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  <Link to="/login">Login</Link>
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={HeroImage}
              ></img>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section class="text-gray-400 bg-gray-900 body-font pt-20 pb-20 pl-10 pr-10">
          <div class="container px-5 py-24 mx-auto">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20 pb-20">
              How do we help you..?
            </h1>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-white text-lg title-font font-medium mb-2">
                    Stabelizing you mind
                  </h2>
                  <p class="leading-relaxed text-base">
                    We help you do that so that you get the jist of things in
                    your life and know about your life in a detailed way so that
                    we could empathize with you.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-white text-lg title-font font-medium mb-2">
                    Cuting the strings
                  </h2>
                  <p class="leading-relaxed text-base">
                    We help you to cut the string in your life from toxic people
                    who always use you for their benefit but never show
                    gratitude and make you feel insignificant. If it is
                    something that you could never break then we help you to
                    live with them in good terms.
                  </p>
                </div>
              </div>
              <div class="p-4 md:w-1/3 flex">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow pl-6">
                  <h2 class="text-white text-lg title-font font-medium mb-2">
                    Self exploration
                  </h2>
                  <p class="leading-relaxed text-base">
                    We help you to find yourself and start being more self
                    centered, if you always thought bonds with no emotional
                    satisfaction is a need then you are living in a toxic
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section
            class={`text-gray-400 bg-gray-900 body-font ${
              key.length > 0 ? "hidden" : "visible"
            }`}
          >
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
                  Fix your mental health un-judged with us
                </h1>
                <Link to="/signup">
                  <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
