import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  let isLoggedIn = !(localStorage.getItem("at") == null);

  // console.log(isLoggedIn);

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("at");
    isLoggedIn = false;
    navigate("/");
  };

  return (
    <header class="text-gray-400 bg-gray-900 body-font pt-5">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          class="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_233_3004)">
              <rect
                x="1"
                width="25"
                height="25"
                rx="12.5"
                fill="#5337A4"
                shape-rendering="crispEdges"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6084 14.6323C10.6084 13.6763 11.0724 12.8287 11.7874 12.3022C11.7295 12.1255 11.6982 11.9368 11.6982 11.7407C11.6982 10.7456 12.5049 9.93882 13.5001 9.93882C14.4952 9.93882 15.3019 10.7456 15.3019 11.7407C15.3019 11.9368 15.2706 12.1255 15.2127 12.3022C15.9277 12.8287 16.3917 13.6763 16.3917 14.6323C16.3917 16.2293 15.097 17.5239 13.5001 17.5239C11.9031 17.5239 10.6084 16.2293 10.6084 14.6323ZM14.2858 11.9985L14.066 12.6692L14.6344 13.0877C15.1105 13.4382 15.4163 13.9995 15.4163 14.6323C15.4163 15.6906 14.5583 16.5485 13.5001 16.5485C12.4418 16.5485 11.5838 15.6906 11.5838 14.6323C11.5838 13.9995 11.8896 13.4382 12.3657 13.0877L12.9341 12.6692L12.7143 11.9985C12.6881 11.9186 12.6736 11.8323 12.6736 11.7407C12.6736 11.2842 13.0436 10.9142 13.5001 10.9142C13.9565 10.9142 14.3265 11.2842 14.3265 11.7407C14.3265 11.8323 14.312 11.9186 14.2858 11.9985Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.45996 14.3818C7.45996 12.3849 8.42902 10.6143 9.92253 9.51467C9.80161 9.14558 9.73621 8.75134 9.73621 8.34183C9.73621 6.26312 11.4213 4.578 13.5 4.578C15.5787 4.578 17.2638 6.26312 17.2638 8.34183C17.2638 8.75134 17.1984 9.14557 17.0775 9.51466C18.571 10.6143 19.5401 12.3849 19.5401 14.3818C19.5401 17.7176 16.8359 20.4219 13.5 20.4219C10.1642 20.4219 7.45996 17.7176 7.45996 14.3818ZM16.1506 9.21097L15.9309 9.88167L16.4992 10.3001C17.7538 11.2238 18.5647 12.708 18.5647 14.3818C18.5647 17.1789 16.2972 19.4465 13.5 19.4465C10.7029 19.4465 8.43535 17.1789 8.43535 14.3818C8.43535 12.708 9.24626 11.2238 10.5008 10.3001L11.0692 9.88167L10.8494 9.21098C10.7602 8.93871 10.7116 8.64691 10.7116 8.34183C10.7116 6.80182 11.96 5.55339 13.5 5.55339C15.04 5.55339 16.2885 6.80182 16.2885 8.34183C16.2885 8.64691 16.2398 8.9387 16.1506 9.21097Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_233_3004"
                x="0.375"
                y="0"
                width="26.25"
                height="26.25"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.625" />
                <feGaussianBlur stdDeviation="0.3125" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_233_3004"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_233_3004"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span class="ml-5 text-xl ">Healme</span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center gap-5">
          <NavLink to="/" class=" hover:text-white ">
            Home
          </NavLink>
          <NavLink to="/aboutus" class="hover:text-white ">
            About
          </NavLink>
          <NavLink to="/product" class="hover:text-white ">
            Product
          </NavLink>
          <NavLink to="/community" class="hover:text-white ">
            Community
          </NavLink>
          <NavLink to="/donate" class="hover:text-white ">
            Donate
          </NavLink>
          {isLoggedIn && (
            <div onClick={logout} class="hover:text-white cursor-pointer">
              Logout
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
