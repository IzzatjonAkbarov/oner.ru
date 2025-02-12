import React, { useContext } from "react";
import deleteimg from "../../../assets/icons/delete.svg";

import { toast } from "react-toastify";
import { ShopContext } from "../../../components/context/Cartcontext/inex";
import { MdCurrencyRuble } from "react-icons/md";

const Cartitem = ({
  id,
  image,
  name,
  rate,
  price,
  old_price,
  comments,
  counter,
}) => {
  const { dispatch } = useContext(ShopContext);
  return (
    <div className="flex items-start max-[450px]:flex-col gap-2 shadow-xl rounded-xl  p-5 border-b border-b-gray-300">
      <div className="max-[450px]:mx-auto">
        <img
          className="w-[90px] h-[70px] max-[450px]:w-full max-[450px]:h-full "
          src={image}
          alt=""
        />
      </div>
      <div className="w-full">
        <h1 className="text-sm font-medium mb-1">{name}</h1>

        <p>
          <span className="text-[12px] font-medium text-gray-400">Цена: </span>
          <span className="text-gray-500 text-[14px] flex items-center gap-2">
            {price.toLocaleString().replace(/,/g, " ")} <MdCurrencyRuble />
          </span>
        </p>

        <div className="flex items-center justify-between mt-5">
          <div className="bg-gray-50   flex w-fit gap-3   items-center px-2 rounded-lg">
            <button
              onClick={() => {
                counter !== 1
                  ? dispatch({
                      type: "decreaseTheCount",
                      product: {
                        id,
                        image,
                        name,
                        rate,
                        price,
                        old_price,
                        comments,
                        counter,
                      },
                    })
                  : dispatch({ type: "delete", deletedId: id });
              }}
              className="border-0 bg-gray-50 p-1.5 text-[19px]"
              aria-label="уменьшить количество предложения">
              -
            </button>
            <span className="mx-2 font-medium">{counter}</span>
            <button
              onClick={() =>
                dispatch({
                  type: "increaseTheCount",
                  product: {
                    id,
                    image,
                    name,
                    rate,
                    price,
                    old_price,
                    comments,
                    counter,
                  },
                })
              }
              className="border-0 bg-gray-50 p-1.5 text-[19px]"
              aria-label="увеличить количество предложения">
              +
            </button>
          </div>

          <button
            className="flex cursor-pointer items-center gap-2"
            onClick={() => {
              dispatch({ type: "delete", deletedId: id }),
                toast.error("Удалено из корзины");
            }}>
            <img src={deleteimg} alt="" /> Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
