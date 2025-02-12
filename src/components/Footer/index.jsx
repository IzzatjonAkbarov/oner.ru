import React from "react";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import mir from "../../assets/images/mir.png";
const Footer = () => {
  return (
    <div className="container1 text-white ">
      <footer className="py-10">
        <div className="w-full xl:w-[1260px] md:block hidden">
          <div className="w-full grid grid-cols-4 pt-[35px]">
            <div className="flex flex-col">
              <div className="flex items-center w-[225px] rounded-[10px] relative">
                <p className="text-white text-lg">О нас</p>
              </div>
              <div className="flex flex-col">
                <a className="mt-[5px]" href="/suppliers">
                  Поставщикам
                </a>
                <a className="mt-[5px]" href="/contacts">
                  Контакты
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-lg">Каталоги</p>
              <div className="flex flex-col">
                <a className="mt-[10px]" href="/original">
                  Оригинальные запчасти
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-lg">Товары</p>
              <div className="flex flex-col">
                <a className="mt-[5px]" href="/catalog/8">
                  Автохимия
                </a>
                <a className="mt-[5px]" href="/catalog/2">
                  Диски
                </a>
                <a className="mt-[5px]" href="/catalog/6">
                  Автостёкла
                </a>
                <a className="mt-[5px]" href="/catalog/9">
                  Автолампы
                </a>
                <a className="mt-[5px]" href="/catalog/12">
                  Шины
                </a>
                <a className="mt-[5px]" href="/catalog/7">
                  Автомасла
                </a>
                <a className="mt-[5px]" href="/catalog/1">
                  Аккумуляторы
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-lg">Помощь</p>
              <div className="flex flex-col">
                <a className="mt-[10px]" href="/faq">
                  Часто задаваемые вопросы
                </a>
                <a className="mt-[5px]" href="/faq">
                  Оплата заказа
                </a>
                <a
                  className="mt-[5px]"
                  href="/faq/list-of-parts-prohibited-for-shipment-by-air">
                  Доставка заказа
                </a>
                <a className="mt-[5px]" href="/faq/return">
                  Возврат товара
                </a>
              </div>
            </div>
          </div>
          <div className="xl:hidden w-full flex justify-end">
            <a href="/terms-of-use">Оферта</a>
            <a className="ml-[30px]" href="/pricacy-policy">
              Конфиденциальность
            </a>
          </div>
          <div className="h-[1px] w-full bg-gray xl:mt-[30px] mt-[15px]" />
          <div className="mt-[20px] w-full flex flex-row items-center justify-between">
            <p>Copyright © ООО «Oner.ru» 2024. All rights reserved.</p>
            <div className="flex flex-row items-center gap-5">
              <p>Принимаем к оплате</p>
              <img alt="visa" className="w-[67px] h-[36px]" src={visa} />
              <img
                alt="mastercard"
                className="w-[67px] h-[36px]"
                src={mastercard}
              />
              <img alt="mir" className="w-[67px] h-[36px]" src={mir} />
            </div>
            <div className="xl:block hidden">
              <a href="/terms-of-use">Оферта</a>
              <a className="ml-[30px]" href="/pricacy-policy">
                Конфиденциальность
              </a>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col w-full pt-[15px]">
          <div className="px-2 w-full" data-orientation="vertical">
            <div>
              <h2>
                <button
                  className="flex w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 py-2 transition-opacity"
                  type="button"
                  id=":R29mm:"
                  aria-expanded="false">
                  <div className="flex-1 flex flex-col text-start">
                    <span className="text-foreground text-medium">
                      <div className="flex items-center w-[225px] rounded-[10px] relative">
                        <p className="text-white text-lg">О нас</p>
                      </div>
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-default-400 text-medium transition-transform rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      transform="rotate(0)">
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
            </div>
            <hr
              className="shrink-0 bg-divider border-none w-full h-divider"
              role="separator"
            />
            <div>
              <h2>
                <button
                  className="flex w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 py-2 transition-opacity"
                  type="button"
                  id=":R2hmm:"
                  aria-expanded="false">
                  <div className="flex-1 flex flex-col text-start">
                    <span className="text-foreground text-medium">
                      <p className="text-white text-lg">Каталоги</p>
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-default-400 text-medium transition-transform rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      transform="rotate(0)">
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
            </div>
            <hr
              className="shrink-0 bg-divider border-none w-full h-divider"
              role="separator"
            />
            <div>
              <h2>
                <button
                  className="flex w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 py-2 transition-opacity"
                  type="button"
                  id=":R2pmm:"
                  aria-expanded="false">
                  <div className="flex-1 flex flex-col text-start">
                    <span className="text-foreground text-medium">
                      <p className="text-white text-lg">Товары</p>
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-default-400 text-medium transition-transform rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      transform="rotate(0)">
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
            </div>
            <hr
              className="shrink-0 bg-divider border-none w-full h-divider"
              role="separator"
            />
            <div>
              <h2>
                <button
                  className="flex w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 py-2 transition-opacity"
                  type="button"
                  id=":R31mm:"
                  aria-expanded="false">
                  <div className="flex-1 flex flex-col text-start">
                    <span className="text-foreground text-medium">
                      <p className="text-white text-lg">Помощь</p>
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-default-400 text-medium transition-transform rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      transform="rotate(0)">
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.66675 8.33331L10.0001 11.6666L13.3334 8.33331"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
            </div>
          </div>
          <div className="p-[8px]  py-[20px] flex flex-row justify-center">
            <a href="/terms-of-use">Оферта</a>
            <a className="ml-[30px]" href="/pricacy-policy">
              Конфиденциальность
            </a>
          </div>
          <div className="mt-[20px] w-full flex flex-row items-center justify-between">
            <div className="flex flex-col items-center gap-5">
              <p>Принимаем к оплате</p>
              <div className="flex flex-rov items-center justify-center  gap-5">
                <img alt="visa" className="w-[67px] h-[36px]" src={visa} />
                <img
                  alt="mastercard"
                  className="w-[67px] h-[36px]"
                  src={mastercard}
                />
                <img alt="mir" className="w-[67px] h-[36px]" src={mir} />
              </div>
            </div>
          </div>
          <p className="w-full text-center py-[20px]">
            Copyright © ООО «Oner.ru» 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
