import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import MenuHeader from "../../components/MenuHeader";
import { getAllCategory } from "../../actions";
import Layout from "../../components/Layout";

/**
 * @author
 * @function Homepage
 **/

const Homepage = (props) => {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};

export default Homepage;
