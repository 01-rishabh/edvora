import React, { Component } from "react";
import CardGrid from "./CardGrid";

class DynamicSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      state: "",
      city: "",
      products: []
    };
  }

  componentDidMount = () => {
    this.setState({ products: this.props.productList });
  };

  productChange = (event) => {
    this.setState({ product: event.target.value });
  };

  stateChange = (event) => {
    this.setState({ state: event.target.value });
  };

  cityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  render() {
    const productList = this.state.products.length > 0 ? this.state.products : this.props.productList;

    return (
      <div className="container mt-5">

      <div className="row">
        <aside className="col-lg-3 col-md-12 col-sm-12">
        <h3 className="border-bottom display-6 text-white">Filters</h3>
          {/* Products */}
          <label>
            {productList && productList.length > 0 && (
              <div>
                <select className="form-select mb-2" aria-label="Select brand" onChange={this.productChange}>
                  {productList.map((product, index) => {
                    return <option key={index}>{product.brand_name}</option>;
                  })}
                </select>
              </div>
            )}
          </label>
          {/* State */}
          <br/>
          <label>
            {productList && productList.length > 0 && (
              <div>
                <select className="form-select mb-2" aria-label="Select state" onChange={this.stateChange}>
                  {productList.map((product, index) => {
                    return <option key={index}>{product.address.state}</option>;
                  })}
                </select>
              </div>
            )}
          </label>
          {/* City */}
          <br/>
          <label>
            {productList && productList.length > 0 && (
              <div>
                <select className="form-select" aria-label="Select city" onChange={this.cityChange}>
                  {productList.map((product, index) => {
                    return <option key={index}>{product.address.city}</option>;
                  })}
                </select>
              </div>
            )}
          </label>
      </aside>

      <div className="col-lg-9 col-md-12 col-sm-12">
        <CardGrid
          products={this.state.products}
          city={this.state.city}
          state={this.state.state}
          product={this.state.product}
        />
      </div>
      </div>
      </div>
    );
  }
}

export default DynamicSelect;
