import React, { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import {
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import logo from "../../assets/images/Logo.png";
import user from "../../assets/icons/user.svg";
import { ShopContext } from "../context/Cartcontext/inex";
const Header = () => {
  const { state } = useContext(ShopContext);
  return (
    <>
      <div className="py-[10px] border-b border-b-gray-300 max-[588px]:hidden">
        <div className="container1 flex items-center justify-between gap-5">
          <Link to={"/"} className="flex items-center gap-1">
            <img src={location} alt="" />
            <p>г. Нижний Новгород, Нижегородская обл.</p>
          </Link>

          <Link className="flex items-center gap-1 max-[792px]:hidden">
            <PhoneOutlined />
            <p className="text-[#1b1d1f] font-medium">+7 (347) 229-46-45</p>
          </Link>
          <ul className="flex items-center gap-5 text-[12px]">
            <li>
              <Link to={"/delivery"}>Доставка</Link>
            </li>
            <li>
              <Link to={"/payments"}>Оплата</Link>
            </li>
            <li>
              <Link to={"/contacts"}>Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container1 py-[13px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="hidden max-[588px]:block">
            <MenuOutlined className="text-[#7A50B7] font-semibold " />
          </div>
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[40%] max-[680px]:hidden">
          <Space.Compact style={{ width: "100%" }}>
            <Input placeholder="Введите номер запчасти или VIN" />
            <Button
              icon={<SearchOutlined />}
              size="large"
              className="!bg-[#7A50B7] !text-white">
              Искать
            </Button>
          </Space.Compact>
        </div>

        <div className="flex items-center gap-10 max-[820px]:gap-4 max-[280px]:gap-2">
          <Link className="flex items-center gap-1 px-5 max-[380px]:py-1 max-[380px]:px-1 max-[380px]:border border-[#7A50B7] rounded-full py-4 max-[280px]:px-2 max-[280px]:py-2">
            <img src={user} alt="" />
            <p className="font-normal text-[14px] max-[800px]:hidden max-[280px]:text-[12px]">
              Вход / Регистрация
            </p>
          </Link>
          <Link
            to={"/cart"}
            className="px-4 relative max-[380px]:py-1 max-[380px]:px-2 py-3 flex items-center gap-2 w-fit rounded-lg border border-gray-400 max-[280px]:px-2 max-[280px]:py-2">
            <ShoppingCartOutlined className="!text-xl !text-[#2E1066] !sfont-bold" />
            <p className="max-[1024px]:hidden max-[280px]:text-[12px]">
              Корзина
            </p>
            {state.shop.length !== 0 ? (
              <p className=" max-[1024px]:absolute top-[-5px] right-[-5px] max-[1024px]:rounded-full max-[1024px]:px-1.5 px-1 text-[12px] rounded-xs bg-[#fb6019] text-white">
                {state.shop.length}
              </p>
            ) : (
              ""
            )}
          </Link>
        </div>
      </div>
      <div className="w-[90%] mx-auto mb-4 hidden max-[680px]:block">
        <Space.Compact style={{ width: "100%" }}>
          <Input placeholder="Введите номер запчасти или VIN" />
          <Button
            icon={<SearchOutlined />}
            size="large"
            className="!bg-[#7A50B7] !text-white">
            Искать
          </Button>
        </Space.Compact>
      </div>
      <div className="container1 pb-[15px] flex items-center justify-between gap-5 max-[280px]:gap-2 ">
        <NavLink className="flex items-center gap-2 py-3 px-4 rounded-lg bg-[#f4f5f6] w-fit max-[280px]:px-2 max-[280px]:py-2  max-[380px]:w-[100%]">
          <MenuOutlined />
          <p className="max-[280px]:text-[12px]">Все категории</p>
        </NavLink>
        <NavLink className="flex items-center gap-2 py-3 px-4 rounded-lg bg-[#f4f5f6] w-fit max-[280px]:px-2 max-[280px]:py-2 max-[380px]:hidden">
          <p className="max-[280px]:text-[12px]">Запчасти для ТО</p>
        </NavLink>
        <NavLink className="flex items-center gap-2 py-3 px-4 rounded-lg bg-[#f4f5f6] w-fit max-[280px]:px-2 max-[280px]:py-2 max-[531px]:hidden">
          <p className="max-[280px]:text-[12px]">Автомасла</p>
        </NavLink>
        <NavLink className="flex items-center gap-2 py-3 px-4 rounded-lg bg-[#f4f5f6] w-fit max-[280px]:px-2 max-[280px]:py-2 max-[797px]:hidden">
          <p className="max-[280px]:text-[12px]">Оригинальные запчасти</p>
        </NavLink>
        <NavLink className="flex items-center gap-2 py-3 px-4 rounded-lg bg-[#f4f5f6] w-fit max-[280px]:px-2 max-[280px]:py-2 max-[1077px]:hidden">
          <p className="max-[280px]:text-[12px]">Неоригинальные запчасти</p>
        </NavLink>
        <NavLink className="flex items-center gap-2 py-3 px-4 rounded-lg bg-[#f4f5f6] w-fit max-[280px]:px-2 max-[280px]:py-2 max-[1212px]:hidden">
          <p className="max-[280px]:text-[12px]">Лампочки</p>
        </NavLink>
      </div>
    </>
  );
};

export default Header;
