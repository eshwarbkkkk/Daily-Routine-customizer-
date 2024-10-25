/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Community() {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          ></img>
          <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Join our community
            </h1>
            <p class="mb-8 leading-relaxed">
              We aspire to build a community where people are help each other
              and grow out of their problems with help
            </p>
            <div class="flex w-full justify-center items-end">
              <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label for="hero-field" class="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="Email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Join
              </button>
            </div>
            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
              You will recive an email with our invite
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
