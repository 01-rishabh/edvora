import React, { Component } from "react";
import Head from 'next/head'
import axios from "axios";

import DynamicSelect from "../components/DynamicSelect";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // binding this to self and using axios to perform GET request
    var self = this;
    axios
      .get("https://assessment-edvora.herokuapp.com/", {
        mode: "no-cors"
      })
      .then(function (response) {
        self.setState({ products: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Head>
          <title>Edvora</title>
          <meta name="description" content="Edvora" />
          <link rel="icon" href="/favicon.ico" />
       </Head>
        {!products ? (
          <p className="text-center display-6 mt-5 text-white">Loading...</p>
        ) : (
          <DynamicSelect productList={products} />
        )}
      </div>
    );
  }
}

export default App;
