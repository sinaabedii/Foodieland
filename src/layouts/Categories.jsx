function Categories() {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 grid items-center mb-16">
      <div className="flex justify-between mb-20">
        <p className="font-bold text-4xl font-">Categories</p>
        <button
          className="rounded-xl px-5 font-semibold h-14"
          style={{ backgroundColor: "#E7FAFE" }}
        >
          View All Categories
        </button>
      </div>
      <div>
        <ul className="flex justify-between">
          <li className="justify-center text-center p-2 px-3 w-40 rounded-3xl bg-gradient-to-t from-zinc-100">
            <img src="/src/assets/image/4.png" className="w-28 mx-auto" />
            <h2 className="font-semibold">Breakfast</h2>
          </li>
          <li className="justify-center text-center p-2 px-3  w-40 rounded-3xl bg-gradient-to-t from-emerald-100">
            <img src="/src/assets/image/5.png" className="w-28 mx-auto" />
            <h2 className="font-semibold">Vegan</h2>
          </li>
          <li className="justify-center text-center p-2 px-3  w-40 rounded-3xl bg-gradient-to-t from-red-100">
            <img src="/src/assets/image/6.png" className="w-28 mx-auto" />
            <h2 className="font-semibold">Meat</h2>
          </li>
          <li className="justify-center text-center p-2 px-3  w-40 rounded-3xl bg-gradient-to-t from-amber-100">
            <img src="/src/assets/image/7.png" className="w-28 mx-auto" />
            <h2 className="font-semibold">Dessert</h2>
          </li>
          <li className="justify-center text-center p-2 px-3  w-40 rounded-3xl bg-gradient-to-t from-zinc-100">
            <img src="/src/assets/image/8.png" className="w-28 mx-auto" />
            <h2 className="font-semibold">Lunch</h2>
          </li>
          <li className="justify-center text-center p-2 px-3  w-40 rounded-3xl bg-gradient-to-t from-orange-100">
            <img src="/src/assets/image/9.png" className="w-28 mx-auto" />
            <h2 className="font-semibold">Chocolate</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
