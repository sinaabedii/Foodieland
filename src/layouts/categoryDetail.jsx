import { FaHeart } from "react-icons/fa";
import { MdFavoriteBorder, MdTimer } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";

function CategoryDetail() {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 grid items-center">
      <div className="grid justify-center text-center mx-auto mb-20">
        <h1 className="text-5xl font-bold mb-7">Simple and tasty recipes</h1>
        <p className="text-lg w-10/12 mx-auto text-gray-500">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="grid w-full gap-12 grid-cols-3 justify-center mx-auto mb-16">
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl ">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-red-500 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/10.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            Big and Juicy Wagyu Beef Cheeseburger
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Snack</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-slate-300 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/11.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            Fresh Lime Roasted Salmon with Ginger Sauce
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Fish</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-red-500 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/12.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            Strawberry Oatmeal Pancake with Honey Syrup
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Breakfast</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-slate-300 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/13.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            Fresh and Healthy Mixed Mayonnaise Salad
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Healthy</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-slate-300 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/14.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            Chicken Meatballs with Cream Cheese
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Meat</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-red-500 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/15.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            Big and Juicy Wagyu Beef Cheeseburger
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Snack</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-red-500 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/15.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            Fruity Pancake with Orange & Blueberry
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Sweet</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-slate-300 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/16.png"
          />
          <h1 className="m-3 w-64 font-semibold">
            The Best Easy One Pot Chicken and Rice
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Snack</p>
            </span>
          </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <span>
            <FaHeart
              className="bg-slate-100 h-9 w-9 text-red-500 p-2 rounded-full mt-2 absolute "
              style={{ marginLeft: "345px" }}
            />
          </span>
          <img
            className="w-96 h-64 rounded-xl mx-2"
            src="/src/assets/image/17.png "
          />
          <h1 className="m-3 w-64 font-semibold">
            The Creamiest Creamy Chicken and Bacon Pasta
          </h1>
          <div className="flex gap-3 mb-4 ">
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <MdTimer className="text-xl" />
              <p className="text-gray-600">30 Minutes</p>
            </span>
            <span className="flex rounded-xl text-sm gap-2 justify-center items-center px-2">
              <PiForkKnifeFill className="text-xl" />
              <p className="text-gray-600">Noodles</p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex mb-36">
        <div className="w-1/2 justify-center items-center my-auto">
          <h1 className="text-5xl font-semibold mb-5 w-4/5">
            Everyone can be a chef in their own kitchen
          </h1>
          <p className="text-gray-500 mb-16 w-2/3">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <button className="text-white bg-black rounded-xl p-2 px-6 w-36 ">
            Learn More
          </button>
        </div>
        <div className="w-1/2 bg-gradient-to-t from-cyan-50 rounded-b-3xl">
          <img src="/src/assets/image/18.png" />
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
