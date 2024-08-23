import { MdOutlinePlayCircle, MdTimer } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";

function Banner() {
  return (
    <div
      className="max-w-screen-xl  mx-auto rounded-3xl items-center justify-between"
      style={{ backgroundColor: "#E7FAFE" }}
    >
      <div className="flex ">
        <div className="grid w-1/2 py-4 px-6">
          <span className="flex gap-2 mb-3 bg-white rounded-3xl w-1/5 items-center justify-center h-9 p-1">
            <img className="w-5 h-5" src="/src/assets/image/2.png" />
            <p className="font-bold text-xs">Hot Recipes</p>
          </span>
          <h1 className="text-6xl font-semibold mb-6">
            Spicy delicious chicken wings
          </h1>
          <h6 className="w-4/5 mb-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed d eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </h6>
          <div className="flex gap-6 mb-6">
            <span
              style={{ backgroundColor: "#0000000D" }}
              className="flex rounded-xl text-sm gap-2 justify-center items-center px-2 bg-green-100"
            >
              <MdTimer />
              <p>30 Minutes</p>
            </span>
            <span
              style={{ backgroundColor: "#0000000D" }}
              className="flex rounded-xl text-sm gap-2 justify-center items-center px-2"
            >
              <PiForkKnifeFill />
              <p>Chicken</p>
            </span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="w-40 flex gap-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/src/assets/image/3.png"
                alt=""
              />
              <div className="grid">
                <h3 className="font-semibold -mb-3.5">John Smith</h3>
                <h6 className="text-sm">15 March 2022</h6>
              </div>
            </span>
            <button className="flex z-auto justify-center items-center gap-2 bg-black rounded-2xl w-52 h-14">
              <h3 className="text-white font-bold text-sm">View Recipes</h3>
              <MdOutlinePlayCircle />
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            className="rounded-br-3xl h-full rounded-tr-3xl"
            src="/src/assets/image/1.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
