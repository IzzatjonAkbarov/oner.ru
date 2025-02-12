import React, { useContext, useState } from "react";
import { ShopContext } from "../../components/context/Cartcontext/inex";
import EmptyCard from "../../components/EmptyCard";
import { CiHeart } from "react-icons/ci";
import { ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { toast } from "react-toastify";
let like = JSON.parse(localStorage.getItem("like")) || [];
const Like = () => {
  const { state, dispatch } = useContext(ShopContext);

  const [liked, setLiked] = useState(true);
  let add = () => toast.success("Added to cart 🛒");

  let unlikingcard = () => toast.warning("Removed from like ");
  return state.like.length ? (
    <div className="container1 grid py-10 grid-cols-4 ">
      {state.like.map(
        ({ id, image, name, rate, price, old_price, comments }) => (
          <div className="w-full border border-gray-200 rounded-lg p-4 bg-white shadow-md">
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-full h-[150px] object-contain mb-4"
              />

              <button
                onClick={() => {
                  like = like.filter((values) => values.id !== id);
                  localStorage.setItem("like", JSON.stringify(like));
                  dispatch({ type: "deletefromlike", deletedId: id });
                  setLiked(false);
                  unlikingcard();
                }}
                className={` absolute top-0 right-0 p-2 rounded-full shadow-md transition-colors ${
                  liked ? "bg-red-500" : "bg-white"
                }`}>
                <CiHeart
                  className={`w-6 h-6 ${
                    liked ? "text-white" : "text-gray-700"
                  }`}
                />
              </button>
            </div>
            <div className="flex flex-col mt-10 h-full">
              <div className="flex items-center gap-3 justify-between mb-3">
                <p className="text-xs text-gray-500">Артикул: {id}</p>
                <div className="flex items-center gap-1">
                  <StarFilled className="!text-yellow-400" />
                  <span className="text-sm font-medium">{rate.toFixed(1)}</span>
                  <span className="text-xs text-gray-500">({comments})</span>
                </div>
              </div>
              <p className="text-xl  font-bold mb-2">{name}</p>

              <div className="flex items-center justify-between ">
                <div className="flex items-center ">
                  <span className="text-lg font-bold text-black">
                    {price.toLocaleString()} ₽
                  </span>
                  <span className="text-sm line-through text-gray-500 ml-2">
                    {old_price.toLocaleString()} ₽
                  </span>
                </div>

                <button
                  onClick={() => {
                    dispatch({
                      type: "add",
                      product: {
                        id,
                        image,
                        name,
                        rate,
                        price,
                        old_price,
                        comments,
                      },
                    }),
                      add();
                  }}
                  className="w-fit text-center px-2 py-1 border border-purple-500 text-white text-sm font-semibold  rounded-lg hover:bg-purple-600 transition">
                  <ShoppingCartOutlined className="!text-purple-500 hover:!text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  ) : (
    <EmptyCard />
  );
};

export default Like;
