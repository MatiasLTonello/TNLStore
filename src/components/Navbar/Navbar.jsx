import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";
import CartIcon from "./CartIcon/CartIcon";

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
} from "./NavbarStyles";

function Navbar() {
  const [hiddenCart, setHiddenCart] = useState(true);

  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <ModalCart hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />
      <ModalUser />
      <div>
        <Link to="/">
          <img
            src="https://www.bairesit.com.ar/Pubs/Sites/site_1/Config/logo-white.png"
            alt="Logo"
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.97 }}>
          <Link to="/">
            <LinkContainerStyled home>
              <HiHome />
            </LinkContainerStyled>
            Home
          </Link>
        </motion.div>

        <CartNavStyled>
          <CartIcon hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />
        </CartNavStyled>

        <UserNavStyled>
          <UserContainerStyled onClick={() => navigate("/register")}>
            <SpanStyled>Inicia sesión</SpanStyled>
            <FaUserAlt />
          </UserContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
