import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/Product";
import { NavLink } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AutoOil = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios
      .get("https://67908d83af8442fd7376b1e4.mockapi.io/currency")
      .then((data) => setCardData(data.data));
  }, []);
  let slicedData = cardData.slice(0, 4);

  return (
    <div>
      <div className="container1 py-10 flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-[#1b1d1f]">Автомасла</h1>
        <NavLink className="flex flex-row-reverse items-center gap-2 py-3 px-4 rounded-lg bg-[#f4f5f6] w-fit ">
          <ArrowRightOutlined />

          <p>Все автомасла</p>
        </NavLink>
      </div>
      <div className=" container1 grid grid-cols-4 gap-10 max-[1024]:px max-[1024px]:grid-cols-3 max-[680px]:grid-cols-2 max-[480px]:grid-cols-1">
        {/* <div className="w-[300px] h-full rounded-[10px] mr-[20px] relative cursor-pointer overflow-hidden">
          <div
            className="relative shadow-black/5 shadow-none rounded-large"
            style={{ maxWidth: "fit-content" }}>
            <img
              src="https://dev.oner.ru//storage/banner-main/caIcG50kKHZfzoDjAqkoDuhlBgiggj-metaUmVjdGFuZ2xlIDI5Mi5wbmc=-.png"
              className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large w-full h-full object-cover"
              alt="Banner Image"
              data-loaded="true"
            />
          </div>
          <div className="absolute top-0 left-0 z-20 p-[30px]">
            <div className="text-white text-2xl font-500">
              <p>Автомасла №1</p>
              <p>от официальных</p>
              <p>дилеров</p>
            </div>
          </div>
          <div
            className=" shadow-black/5 shadow-none rounded-large !absolute bottom-0 right-0 !max-w-2/3"
            style={{ maxWidth: "fit-content" }}>
            {" "}
            <img
              src="https://dev.oner.ru//storage/banner-main/5i5KUIGwbiFygoPzPVtRx1HGt9MqbJ-metaaW1hZ2UgOTMucG5n-.png"
              className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 z-10 object-cover object-center mr-[10px] rounded-[0px]"
              alt="Автомасла"
              data-loaded="true"
            />
          </div>
        </div> */}

        {slicedData.map((value) => (
          <ProductCard key={value.id} {...value} />
        ))}
      </div>
      <div className="container1 py-10 grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
        <div className="relative !rounded-xl overflow-hidden w-full xl:h-[250px] sm:h-[215px] h-[180px] bg-grey-light">
          <div
            className="relative shadow-black/5 shadow-none rounded-large w-full h-full !max-w-none"
            style={{ maxWidth: "fit-content" }}>
            {" "}
            <img
              src="https://dev.oner.ru//storage/banner/2ZRot4EQBnL3KISB7M3QoP92Nd75EE-metaUmVjdGFuZ2xlIDI5Mi5wbmc=-.png"
              className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 object-cover object-center w-full h-full rounded-[0px]"
              alt="Моторные масла Genesis"
              data-loaded="true"
            />
          </div>
          <div className="md:p-[30px] p-[15px] z-20 absolute top-0 h-full left-0 md:w-2/3 flex flex-col justify-between sm:block">
            <h1 className="text-[18px] sm:text-3xl font-600">
              Моторные масла Genesis
            </h1>
            <Button
              className="!bg-purple-600 mt-5 px-4 py-3 !text-white "
              iconPosition="end"
              icon={<ArrowRightOutlined />}>
              Перейти
            </Button>
          </div>
          <div
            className="relative shadow-black/5 shadow-none rounded-large !absolute bottom-0 w-full h-full !max-w-none"
            style={{ maxWidth: "fit-content" }}>
            {" "}
            <img
              src="https://dev.oner.ru//storage/banner/5ixqVCynMoVCSRMzoJJrm639bmnFFa-metaTWFzayBHcm91cC5wbmc=-.png"
              className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 z-10 object-cover object-center w-full h-full rounded-[0px]"
              alt="Моторные масла Genesis"
              data-loaded="true"
            />
          </div>
        </div>
        <div className="relative !rounded-xl overflow-hidden w-full xl:h-[250px] sm:h-[215px] h-[180px] bg-grey-light">
          <div
            className="relative shadow-black/5 shadow-none rounded-large w-full h-full !max-w-none"
            style={{ maxWidth: "fit-content" }}>
            {" "}
            <img
              src="https://dev.oner.ru//storage/banner/TYZS1miwaABhDaMSFv7KEA69Iybeyd-metaUmVjdGFuZ2xlIDI5Mi5wbmc=-.png"
              className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 object-cover object-center w-full h-full rounded-[0px]"
              alt="Моторные масла Genesis"
              data-loaded="true"
            />
          </div>
          <div className="md:p-[30px] p-[15px] z-20 absolute top-0 h-full left-0 md:w-2/3 flex flex-col justify-between sm:block">
            <h1 className="text-[18px] sm:text-3xl font-600">
              Моторные масла Genesis
            </h1>
            <Button
              className="!bg-purple-600 mt-5 px-4 py-3 !text-white "
              iconPosition="end"
              icon={<ArrowRightOutlined />}>
              Перейти
            </Button>
          </div>
          <div
            className=" shadow-black/5 shadow-none rounded-large !absolute bottom-0 w-full h-full !max-w-none"
            style={{ maxWidth: "fit-content" }}>
            {" "}
            <img
              src="https://dev.oner.ru//storage/banner/z8dN2KNSKGSb54otQz04N9km8rKJKR-metaTWFzayBHcm91cC5wbmc=-.png"
              className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 z-10 object-cover object-center w-full h-full rounded-[0px]"
              alt="Моторные масла Genesis"
              data-loaded="true"
            />
          </div>
        </div>
        <div className="relative !rounded-xl overflow-hidden w-full xl:h-[250px] sm:h-[215px] h-[180px] bg-grey-light">
          <div
            className="relative shadow-black/5 shadow-none rounded-large w-full h-full !max-w-none"
            style={{ maxWidth: "fit-content" }}>
            {" "}
            <img
              src="https://dev.oner.ru//storage/banner/2ZRot4EQBnL3KISB7M3QoP92Nd75EE-metaUmVjdGFuZ2xlIDI5Mi5wbmc=-.png"
              className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 object-cover object-center w-full h-full rounded-[0px]"
              alt="Моторные масла Genesis"
              data-loaded="true"
            />
          </div>
          <div className="md:p-[30px] p-[15px] z-20 absolute top-0 h-full left-0 md:w-2/3 flex flex-col justify-between sm:block">
            <h1 className="text-[18px] sm:text-3xl font-600">
              Моторные масла Genesis
            </h1>
            <Button
              className="!bg-purple-600 mt-5 px-4 py-3 !text-white "
              iconPosition="end"
              icon={<ArrowRightOutlined />}>
              Перейти
            </Button>
          </div>
          <div
            className="relative shadow-black/5 shadow-none rounded-large !absolute bottom-0 w-full h-full !max-w-none"
            style={{ maxWidth: "fit-content" }}>
            {" "}
            <img
              src="https://dev.oner.ru//storage/banner/5ixqVCynMoVCSRMzoJJrm639bmnFFa-metaTWFzayBHcm91cC5wbmc=-.png"
              className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 z-10 object-cover object-center w-full h-full rounded-[0px]"
              alt="Моторные масла Genesis"
              data-loaded="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoOil;
