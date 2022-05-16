import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <section className='header'>
      <span className='title'>TODO</span>
      <FontAwesomeIcon className='img_plus fa-3x' icon={faSquarePlus} />{" "}
    </section>
  );
}

export default Header;
