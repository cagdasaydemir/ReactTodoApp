import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <section className="header">
      <span className="header-title">TODO</span>
      <FontAwesomeIcon className="add-btn" icon={faCirclePlus} />
    </section>
  );
}

export default Header;
