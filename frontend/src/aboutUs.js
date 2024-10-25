export default function About() {
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font pt-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Our Vision
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              At our core, we are passionate about creating software that truly
              makes a difference in people's lives. We understand that everyone
              faces unique challenges, and we aim to provide tools that help
              individuals tap into their strengths, overcome obstacles, and
              reach for the stars.
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base pt-4">
              Our products are designed with empathy and innovation, focusing on
              enhancing mental and emotional well-being. By supporting people in
              their personal and professional journeys, we strive to contribute
              to a healthier, happier society. We believe that by empowering
              individuals to achieve their best, we pave the way for a brighter,
              more promising future for all.
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base pt-4">
              Together, let's build a world where everyone has the opportunity
              to thrive and realize their fullest potential.{" "}
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-400 bg-gray-900 body-font pt-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Our Team
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              The people on this webpage have made major contribution to the
              project irrespective of their title
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                ></img>
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">
                    Ms. Poornima R D
                  </h2>
                  <p class="text-gray-600">Instructor and guide</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                ></img>
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">Eshwar B K</h2>
                  <p class="text-gray-600">Operations head</p>
                </div>
              </div>
            </div>
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                ></img>
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">
                    Poornachandra M
                  </h2>
                  <p class="text-gray-600">Founder and Ideator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
