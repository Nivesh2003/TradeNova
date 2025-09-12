import React, { useState } from "react";
import {Tooltip, Grow} from '@mui/material';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp} from '@mui/icons-material';
import {watchlist} from "../data/data";
import '../../src/App.css' 
const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return <WatchListItem stock={stock} key={index}/>
        })}
      </ul>
    </div>
  );
};

export default WatchList; 

const WatchListItem = ({stock})=>{
  const [showWatchListItem , setShowWatchListItem] = useState(false);
  const onMouseHover = (e) =>{
    setShowWatchListItem(true);
  }
  const onMouseExit = (e) =>{
    setShowWatchListItem(false);
  }

  return (
    <li onMouseEnter={onMouseHover} onMouseLeave={onMouseExit}>
      <div className="item">
        <p className={stock.isDown? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown?(
            <KeyboardArrowDown className="down"/>
          ):(<KeyboardArrowUp className="up"/>)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListItem && <WatchListActions uid={stock.name}/>}
    </li>
  )
} 

const WatchListActions = ({uid}) => {
return <span className="actions">
  <span className="">
    <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}> {/* Material Ui icons */}
      <button className="buy">Buy</button>
    </Tooltip>
    <Tooltip title="Sell this stock (S)" placement="top" arrow TransitionComponent={Grow}> {/* Material Ui icons */}
      <button className="sell">Sell</button>
    </Tooltip>
    <Tooltip title="View Analytics" placement="top" arrow TransitionComponent={Grow}> {/* Material Ui icons */}
      <button className="action"><BarChartOutlined className="icon"/></button>
    </Tooltip>
  </span>
</span>

}