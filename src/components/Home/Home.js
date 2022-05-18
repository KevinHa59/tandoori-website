import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import PopularDishes from "./PopoularDishes/PopularDishes";
import OpenTable from "./OpenTable/OpenTable";
import BookCatering from "./BookYourCateringNow/BookCatering";
import FamilyPack from "./FamilyPack/FamilyPack";
// import LazyLoad from "react-lazyload";

export default function Home() {
  return (
    <div className="HomeContainer">
      <Banner />
      <About />
      <PopularDishes />
      <OpenTable />
      <BookCatering />
      <FamilyPack />
    </div>
  );
}
