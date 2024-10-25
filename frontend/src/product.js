// import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { sendChat } from "./hooks/chat.js";
import BeatLoader from "react-spinners/BeatLoader.js";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

const Chat = () => {
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState("");
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([]);
  const history = [];

  const [error, setError] = useState("");

  const constraint =
    ". Don't mention about anything below this in the response\nDon't include * in your response. Return the response as HTML.";

  useEffect(() => {
    const checkLoggedIn = () => {
      const token = localStorage.getItem("at");

      if (!token) {
        navigate("/login");
      }
    };

    checkLoggedIn();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`Here`);
    // setError("");
    if (input.length <= 2) {
      setError("Your prompt is too short to be processed by our AI.");
      toast(error);
      return;
    }
    setLoading(true);
    const body = { history: chat, prompt: input };
    setPrompt(input);
    const response = await sendChat(body);
    console.log(response);
    setText(response.payload);
    history.push({ type: "user", content: input });
    history.push({ type: "model", content: response.payload });
    // console.log(history);
    setChat([...chat, ...history]);
    // console.log(chat);
    setInput("");
    setLoading(false);
  };

  // console.log(response)

  return (
    <div className="flex flex-col bg-[#121212] items-center justify-between h-screen w-full">
      <div>
        <h1 className="font-bold text-3xl text-center my-5"></h1>
      </div>
      {/* Conversation */}
      <div className="bg-[#111827] rounded-xl min-w-[80%] min-h-[80%] max-w-[80%] overflow-y-auto">
        {/* {prompt && (
          <p className="m-5 font-semibold text-xl bg-green-500 rounded-xl p-2 text-right">
            {prompt}
          </p>
        )}
        {text ? (
          <p className="m-5 font-semibold text-xl bg-slate-500 rounded-xl p-2">
            {text}
          </p>
        ) : (
          <p className="m-5 font-semibold text-xl bg-orange-500 rounded-xl p-2">
            Hey there, say hello to your new lifestyle assistant, how can I help
            you today?
          </p>
        )} */}
        {chat.length > 0 ? (
          chat.map((ele, index) => {
            return ele.type == "user" ? (
              <p className="m-5 font-semibold text-xl bg-green-500 rounded-xl p-2 text-right">
                {ele.content}
              </p>
            ) : (
              <p className="m-5 font-semibold text-xl bg-slate-500 rounded-xl p-2">
                {ele.content}
              </p>
            );
          })
        ) : (
          <p className="m-5 font-semibold text-xl bg-orange-500 rounded-xl p-2">
            Hey there, say hello to your new lifestyle assistant, how can I help
            you today?
          </p>
        )}
      </div>
      <form
        autoComplete="off"
        className="flex gap-3 mb-10 mt-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="prompt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="p-2 rounded-xl text-white font-semibold text-xl bg-transparent border-black border-[1px] w-[30rem]"
        />
        <button
          type="submit"
          className={`px-6 py-2 font-semibold hover:bg-green-400 rounded-xl ${
            loading ? "bg-yellow-400" : "bg-green-500"
          }`}
        >
          {loading ? (
            <BeatLoader
              color={"#ffffff"}
              loading={loading}
              cssOverride={override}
              size={5}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Send"
          )}
        </button>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </form>
    </div>
  );
};

export default Chat;

// function Product() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLoggedIn = () => {
//       const key = localStorage.getItem("at");

//       if (!key) {
//         navigate("/login");
//       }
//     };

//     checkLoggedIn();
//   }, [navigate]);

//   return (
//     <>
//       <section class="text-gray-400 bg-gray-900 body-font pt-10 pb-10">
//         <div class="pt-10 pb-10"></div>
//         <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//           <div class="text-center lg:w-2/3 w-full">
//             <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//               Are you ready..?
//             </h1>
//             <p class="leading-relaxed mb-8">
//               We would like to know about you and your life in depth through a
//               questionnaire to personalize your experience
//             </p>
//             <div class="flex justify-center">
//               <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 <Link to="/questionear">Yes, ready</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Product;
