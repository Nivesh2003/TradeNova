import React ,{useState} from "react";

const Menu = () => {
  return (
    <div className="menu-container">
      <img src="/images/logoTN.svg" style={{ width: "100px" }} />
      <div className="menus">
        <ul>
          <li>
            <p>Dashboard</p>
          </li>
          <li>
            <p>Orders</p>
          </li>
          <li>
            <p>Holdings</p>
          </li>
          <li>
            <p>Positions</p>
          </li>
          <li>
            <p>Funds</p>
          </li>
          <li>
            <p>Apps</p>
          </li>
        </ul>
        <hr />
        <div className="profile" >
          <div className="avatar">ZU</div>
          <h4 className="username">USERID</h4>
        </div>
      </div>
    </div>
  );
};

export default Menu;