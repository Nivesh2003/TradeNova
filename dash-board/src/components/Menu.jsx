import React, { useState } from "react";
import {Link} from 'react-router-dom';
const Menu = () => {
  const [selectedOption, setselectedOption] = useState(0);
  const [profileDropdown, setprofileDropdown] = useState(false);

  const handleClick = (index) => {
    setselectedOption(index);
  }
  const handleDropdown = (index) => {
    setprofileDropdown(!profileDropdown); //Selects opposite of what is profileDropdown is rn (it not open , it opens it and vice versa)
  }

  const menuClass = "menu";
  const activeMenu = "menu selected";

  return (
    <div className="menu-container">
      <img src="/images/logoTN.svg" style={{ width: "100px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:'none'}} to={"/"} onClick={()=>{handleClick(0)}}><p className={selectedOption===0 ? activeMenu : menuClass}>Dashboard</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to={"/orders"} onClick={()=>{handleClick(1)}}><p className={selectedOption===1 ? activeMenu : menuClass}>Orders</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to={"/holdings"} onClick={()=>{handleClick(2)}}><p className={selectedOption===2 ? activeMenu : menuClass}>Holdings</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to={"/positions"} onClick={()=>{handleClick(3)}}><p className={selectedOption===3 ? activeMenu : menuClass}>Positions</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to={"/funds"} onClick={()=>{handleClick(4)}}><p className={selectedOption===4 ? activeMenu : menuClass}>Funds</p></Link>
          </li>
          <li>
          <Link style={{textDecoration:'none'}} to={"/apps"} onClick={()=>{handleClick(5)}}><p className={selectedOption===5 ? activeMenu : menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleDropdown}>
          <div className="avatar">ZU</div>
          <h4 className="username">USERID</h4>
        </div>
        {profileDropdown}
      </div>
    </div>
  );
};

export default Menu;