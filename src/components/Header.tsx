import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-title">What can I make with...</h1>
      <p className="header-para">
        Got a few slices of leftover bread, an odd onion in your cupboard or
        some milk in the fridge? the recipe finder tool will show you all the
        things you can make, so your food doesn't go to waste, with only one
        added ingredient needed.
      </p>
    </div>
  );
};

export default Header;
