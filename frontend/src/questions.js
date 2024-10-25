// function Questions() {
//   return (
//     <>
//       <div className="bg-gray-900 flex items-center justify-center p-10">
//         <form>
//           <div className="grid grid-rows-27 gap-5 justify-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//               Tell me about you habits
//             </h1>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How active is you daily life..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Near to none (get up and work from home)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Low (get up and go to work)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Medium (get up, go to work and do house chores)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     High (get up , go to work and go to gym)
//                   </span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 What does your plate look like..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Packaged food (Ultra processed food)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     No vegetables (Less protein and fibre)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Filled with different rice and wheat dishes (carbs)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Vegetables and pulses</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 What is your screen time (mobile, laptop, TV, smart watch)..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">21hrs+</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">15hrs</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">8hrs</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">4hrs</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How often do you eat outside..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Regularly</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Twice a week</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Once a week</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Once a month</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 When was the last time you were sick..?{" "}
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Recently</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Regularly (once a month)</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Occasionally (once in 3-6months){" "}
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Rarely (Once in a year)</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Are you a clumsy person..?{" "}
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, all the time</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, some times</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Rarely (when you are sick)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Never</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 What time do you sleep..?{" "}
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">9pm</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">10pm</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">11pm</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">12+am</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 What time do you wake up..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">4am</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">5am</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">6am</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">7am+</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How many meals do you have a day..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">1</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">2</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">3</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">4+</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How energetic do you feel when you wake up..?{" "}
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Hyper active</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Active</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Neutral</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Low</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Do you have any uncurable medical condition..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="text"
//                     name="color"
//                     className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                   />
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 What type of physical exercising style do you prefer..?{" "}
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">HIT</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Cardio</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Calesthenics</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Not sure</span>
//                 </label>
//               </div>
//             </div>
//             <p className="pt-10">
//               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//                 Tell me about you emotions
//               </h1>
//             </p>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Which of these extreme emotions did you feel often..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Love</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Anger and frustration</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Anxiety</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Depressed</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 What type of a person are you..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Sensitive | | Emotional</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Aspirational | | Optimistic
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Jacked | | soft and harsh (Like a Jack fruit)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Calm and quiet | | Go with the flow
//                   </span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How happy are you with your life..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Satisfied</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Stable enough</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Feel like I am not enough
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">I am a failure</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How far do you live from you parents..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">With them </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Can meet one in a week (50km)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Can meet every month (50-200km)
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Very far</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How comfortable are you sharing things with you parents..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I share everything with them
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I share what they want to know
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I would share if they ask me{" "}
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I will never share anything
//                   </span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How often do you get panic attacks..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">no I don’t</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">2 times a month</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">2 times a week</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">6+ times a week</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How often do you give time to yourself..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I have people who take care of me
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I spend good time with myself with an activity regularly
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I spend time with myself occasionally
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I can't afford to in my situation
//                   </span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Are you insecure about your looks..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, I am lean</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, I am fat</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, I am dark</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">No, I am confident</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Do you feel pressurized in your life..?{" "}
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes work pressure</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes family pressure</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     es I feel pressure looking my friends growing
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">no I got myself covered</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Do you feel lonely..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, I need people</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, I need a companion</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, I can't find any</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">No, I enjoy solitude</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Which of your desires are not fulfilled..?{" "}
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Love / Attention / Fame</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Lust / Pleasure</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Money</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Spiritual</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Do you have bonds with people another than blood relations..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Yes, they get really well with me
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Yes, they never could be trusted
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     No, I am happy without them
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     No, I can’t find a good fit for me
//                   </span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 How expressive are you around your environment..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     Very much I am comfortable
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I don’t express much as I am uncomfortable
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     I don’t express much as I don’t feel the need
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">No I am not comfortable </span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 What does success means to you..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Career/Passion</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Relationships</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Money</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Spirituality</span>
//                 </label>
//               </div>
//             </div>
//             <div className="bg-gray-800 text-white rounded-lg shadow-lg p-10 w-full max-w-2xl">
//               <div className="mb-6 text-2xl font-semibold">
//                 Do you believe in any higher entity..?
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="red"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">Yes, my religion</span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="blue"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     yes, the universal energy
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="green"
//                     className="custom-radio form-radio text-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     No, everything is science to explore
//                   </span>
//                 </label>
//               </div>
//               <div className="mb-4">
//                 <label className="flex items-center">
//                   <input
//                     class="custom-radio"
//                     type="radio"
//                     name="color"
//                     value="yellow"
//                     className="custom-radio form-radio color-purple-500"
//                   />
//                   <span className="ml-2 text-lg">
//                     No, I pave my path of life
//                   </span>
//                 </label>
//               </div>
//             </div>
//             <div>
//               <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Questions;
