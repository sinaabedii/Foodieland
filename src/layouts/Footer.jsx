import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function Footer() {
  return (
    <div className="max-w-screen-xl mx-auto grid items-center mb-16">
      <div className="flex justify-between pb-9 border-b border-gray-200">
        <span>
          <h1 className="font-semibold text-xl mb-3">Foodieland.</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuipisicing elit
          </p>
        </span>
        <span className="">
          <ul className="flex gap-7">
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
        </span>
      </div>
      <span className="flex justify-center items-center gap-2 mt-6">
        <CiCircleChevLeft className="text-xl" />
        <a className="cursor-pointer" href="https://github.com/sinaabedii">
          Created By <strong className="text-orange-600">Sina Abedi</strong>
        </a>
        <CiCircleChevRight className="text-xl" />
      </span>
    </div>
  );
}

export default Footer;
