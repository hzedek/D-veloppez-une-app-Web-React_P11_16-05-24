import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Error from "../components/Error";

function Error404() {
  return (
    <Fragment>
      <Error />
      <Footer />
    </Fragment>
  );
}

export default Error404;
