import React from "react";
import { SearchBar } from "./SearchBar";
import { CategoryScroller } from "./CategoriesScroller";
import Footer from "./components/Footer";
import data from "./MOCK_DATA.json";
import _ from "lodash";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import { AccountSetting } from "./components/AccountSetting/AccountSetting";
import { MyLearning } from "./components/MyLearning/MyLearning";
import { Navbar } from "./components/Navbar/Navbar";

export const FrontPage = () => {
  return (
    <div className="avenir">
      <header>
        <DropdownMenu />
      </header>

      <SearchBar />
      <Navbar />
      <CategoryScroller
        categories={_.uniq(
          data
            .map(({ category }) => category)
            .filter((cat) => !cat.includes("|"))
        ).map((name) => ({ name }))}
      />
      <br />
      <Footer />
    </div>
  );
};
