import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/Product";
import { NavLink } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const AutoOil = () => {
  const [cardData, setCardData] = useState([]);

  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get("https://67908d83af8442fd7376b1e4.mockapi.io/currency")
      .then((data) => {
        setCardData(data.data), setloading(false);
      });
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
      {loading ? (
        <>
          <div className=" container1 grid grid-cols-4 max-[1128px]:grid-cols-4 max-[900px]:grid-cols-3 max-[665px]:grid-cols-2 max-[445px]:grid-cols-1 gap-5 ">
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="w-full p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse m">
              <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm ">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full  w-full mb-4" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full " />
              <div className="flex items-center mt-4">
                <svg
                  className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2" />
                  <div className="w-full h-2 bg-gray-200 rounded-full " />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <div className=" container1 grid grid-cols-4 gap-10 max-[1024]:px max-[1024px]:grid-cols-3 max-[680px]:grid-cols-2 max-[480px]:grid-cols-1">
          {slicedData.map((value) => (
            <ProductCard key={value.id} {...value} />
          ))}
        </div>
      )}

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
