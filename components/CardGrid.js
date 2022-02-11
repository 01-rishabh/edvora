import React from "react";
import PropTypes from "prop-types";

import Card from "./Card";

function CardGrid(props) {
  let { products, product, city, state } = props;

  return (
    <div>
      <h1 className="text-white">Edvora</h1>
      <h3 className="text-muted">Products</h3>
      <p className="border-bottom mt-3 pb-2 text-white">Product Name</p>
      <div className="scrolling-wrapper row flex-row flex-nowrap scrolling-card p-4 nice-round">
      {products.length !== 0 ? (
        products.map((data, i) =>
          data.product_name === product ||
          data.address.state === state ||
          data.address.city === city || 
          product === '' ? (
            <Card
              key={i}
              name={data.product_name}
              brandName={data.brand_name}
              location={data.address.state}
              description={data.discription}
              price={data.price}
              date={data.time}
              src={data.image}
            />
          ) : (
            ""
          )
        )
      ) : (
        <p className="text-white">No data. Kindly refresh</p>
      )}
      </div>

      <p className="border-bottom mt-5 pb-2 text-white">Product Name</p>
      <div className="scrolling-wrapper row flex-row flex-nowrap scrolling-card p-4 nice-round">
      {products.length !== 0 ? (
        products.map((data, i) =>
          data.product_name === product ||
          data.address.state === state ||
          data.address.city === city || 
          product === '' ? (
            <Card
              key={i}
              name={data.product_name}
              brandName={data.brand_name}
              location={data.address.state}
              description={data.discription}
              price={data.price}
              date={data.time}
              src={data.image}
            />
          ) : (
            ""
          )
        )
      ) : (
        <p className="text-white">No data. Kindly refresh</p>
      )}
      </div>
    </div>
  );
}

CardGrid.propTypes = {
  products: PropTypes.array,
  city: PropTypes.string,
  state: PropTypes.string,
  product: PropTypes.string
};

export default CardGrid;
