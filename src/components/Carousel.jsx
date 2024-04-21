import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <div id="carouselHome" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselHome"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          {/* <div class="carousel-item active" data-bs-interval="4000">
            <div className="relative isolate px-6 pt-0 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our next round of funding.
                    <a href="#" className="font-semibold text-indigo-600">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Data to enrich your online business
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div class="carousel-item active" data-bs-interval="4000">
            <div className="relative isolate px-6 pt-0 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Siz xohlagan ko'rinishdagi zamonaviy mebellar to'plami.&nbsp;&nbsp;
                    <Link to={"/furnitures"} className="font-semibold text-indigo-600">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Ko'proq ko'rish <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Interyeringiz yorqin bo'lsin
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Chegirmalar bilan har qanday xona uchun zamonaviy mebellar
                    va yoritish mahsulotlari
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">

                    <Link
                      to={"/furniture"}
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sotib olish
                    </Link>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Ko'proq ko'rish <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            {/* <img src="./img/kif-2.jfif" class="d-block w-100" alt="..." /> */}

            <div className="relative isolate px-6 pt-0 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Siz xohlagan ko'rinishdagi zamonaviy mebellar to'plami.&nbsp;&nbsp;
                    <Link to={"/furnitures"} className="font-semibold text-indigo-600">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Ko'proq ko'rish <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Tez va sifatli ko'rinishda yetkazib beramiz!
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Siz tanlagan mebellarni seshanba, payshanba va shanba
                    kunlari tezlik bilan yetkazib beriladi.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Boshlash
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Ko'proq ko'rish <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            {/* <img src="./img/kif-2.jfif" class="d-block w-100" alt="..." /> */}

            <div className="relative isolate px-6 pt-0 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Siz xohlagan ko'rinishdagi zamonaviy mebellar to'plami.&nbsp;&nbsp;
                    <Link to={"/furnitures"} className="font-semibold text-indigo-600">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Ko'proq ko'rish <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Mebellar sifatiga 100% javob beramiz!
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Zamonaviy va dunyo standartlariga mos mebellar to'plami.
                    Mebellearimiz odamlar ishonchini oqlab kelmoqda ...
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Boshlash
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Ko'proq ko'rish<span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
