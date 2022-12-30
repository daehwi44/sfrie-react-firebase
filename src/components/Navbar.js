import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../img/logo.png";

const Navbar = ({ isAuth }) => {
  return (
    <div className="menubar">
      <Link to="/">
        <img className="logo" src={Image} />
      </Link>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          ホーム
        </Link>

        {!isAuth ? (
          <Link to="/login">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            ログイン
          </Link>
        ) : (
          <>
            <Link to="/createPost">
              <FontAwesomeIcon icon={faFilePen} />
              記事投稿
            </Link>
            <Link to="/logout">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
              ログアウト
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
