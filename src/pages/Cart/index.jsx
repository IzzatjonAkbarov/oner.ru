import React, { useContext } from "react";

import Total from "./Total";
import { ShopContext } from "../../components/context/Cartcontext/inex";
import Cartitem from "./Cartitem";
import EmptyCard from "../../components/Emptycard";

const Cart = () => {
  const { state } = useContext(ShopContext);

  return state.shop.length ? (
    <div className="container1 py-3">
      <div className="grid items-starts grid-cols-[2fr_1fr] max-[780px]:grid-cols-1">
        <div className="flex gap-5 flex-col">
          {state.shop.map((value) => (
            <Cartitem key={value.id} {...value} />
          ))}
        </div>
        <Total shoptotal={state.shop} />
      </div>
    </div>
  ) : (
    <EmptyCard />
  );
};

export default Cart;
