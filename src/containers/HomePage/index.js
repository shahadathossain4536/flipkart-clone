import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import MenuHeader from "../../components/MenuHeader";
import { getAllCategory } from "../../actions";

/**
 * @author
 * @function Homepage
 **/

const Homepage = (props) => {
  return (
    <div>
      <Header />
      <MenuHeader />
    </div>
  );
};

export default Homepage;
