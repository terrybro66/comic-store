import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Search from "./Search";

const SiteHeader = () => {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#666",
  };
  return (
    <div style={container}>
      <Logo />
      <Search />
      <NavLinks />
    </div>
  );
};

export default SiteHeader;
