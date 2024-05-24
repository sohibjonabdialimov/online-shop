import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import basket from "../../assets/basket.png";
import saved from "../../assets/heart.png";

const Header = () => {
  const hidden = useRef();
  function openNavbarFunction() {
    hidden.current?.classList.remove("hidden");
  }
  function closeNavbarFunction() {
    hidden.current?.classList.add("hidden");
  }
  return (
    <>
      <header className="relative z-50 container">
        <nav
          className="flex items-center justify-between p-6 lg:px-28"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to={"/"} className="-m-1.5 p-1.5 flex items-center gap-2">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
              <span className="text-slate-700 font-bold text-2xl">
                Mebellar
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => openNavbarFunction()}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 justify-between items-center">
            <NavLink
              to={"/"}
              className={`text-base font-mono leading-6 text-gray-900`}
            >
              Bosh sahifa
            </NavLink>
            <NavLink
              to={"/furnitures"}
              className="text-base font-mono leading-6 text-gray-900"
            >
              Mebellar
            </NavLink>
            <NavLink
              to={"/design"}
              className="text-base font-mono leading-6 text-gray-900"
            >
              Dizaynlar
            </NavLink>
            <NavLink
              to={"/installment"}
              className="text-base font-mono leading-6 text-gray-900"
            >
              To'lov rejasi
            </NavLink>
            <NavLink
              to={"/contact"}
              className="text-base font-mono leading-6 text-gray-900"
            >
              Aloqa
            </NavLink>
            <NavLink to={"/order"} className="w-[30px] h-[30px] header_img">
              <img className="object-cover" src={basket} alt="" />
              <p>0</p>
            </NavLink>
            <NavLink to={"/saved"} className="w-[30px] h-[30px] header_img">
              <img className="object-cover" src={saved} alt="" />
              <p>0</p>
            </NavLink>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to={"/feedback"}
              className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded"
            >
              Fikr-mulohazalar uchun<span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
        <div
          ref={hidden}
          className="lg:hidden hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-50"></div>
          <div
            onClick={() => closeNavbarFunction()}
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <Link to={"/"} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to={"/"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Bosh sahifa
                  </Link>
                  <Link
                    to={"/furnitures"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Mebellar
                  </Link>
                  <Link
                    to={"/design"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Dizaynlar
                  </Link>
                  <Link
                    to={"/contact"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Biz bilan bog'laning
                  </Link>
                  {/* <Link
                    to={"/contact"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <img src={basket} alt="" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
