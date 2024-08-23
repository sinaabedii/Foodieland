import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Header() {
  return (
    <div>
      <nav class="bg-white w-full z-20 top-0 start-0 border-b border-gray-200 mb-5">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="font-extrabold">
            Foodieland
          </a>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div class="flex justify-between gap-6 ">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
