import { MenuOutlined } from "@ant-design/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../../../components/Product";

const Recommendation = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios
      .get("https://67908d83af8442fd7376b1e4.mockapi.io/currency")
      .then((data) => setCardData(data.data));
  }, []);
  return (
    <div className="container1">
      <div className="container1 py-10 flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-[#1b1d1f]">Рекомендуем</h1>
      </div>

      <div className="grid grid-cols-4 gap-10 pb-10 max-[1024px]:grid-cols-3 max-[680px]:grid-cols-2 max-[450px]:grid-cols-1">
        {cardData.map((value) => (
          <ProductCard key={value.id} {...value} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
