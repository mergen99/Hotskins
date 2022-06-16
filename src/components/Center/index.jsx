import React,{useState} from "react";
import "../Center/center.scss";
import CS_GO from "../Center/csgo.png";
import Dota from "../Center/dota.png";
import {NavLink} from 'react-router-dom';
import classNames from "classnames";
import Header from "../Header";


const Center = ({t}) => {
  const [activeSkin, setActiveSkin] = useState('');
   const changes = (event) => {
    const target = event.currentTarget;
    const active = target.className == "center___games__game1" ? true : false
    setActiveSkin(active)
    /* if (activeSkin === true && target.className === "center___games__game1"){
      setActiveSkin(true);
    }
    else if (target.className === "center___games__game2" && activeSkin === false){
      setActiveSkin(false)
    }
    else if (target.className === "center___games__game1" ){
      setActiveSkin(true)
    }
    else if (target.className === "center___games__game2"){
      setActiveSkin(false)
    }
    console.log(target.className) */
    console.log(activeSkin)
   }
  return (
    <div className="center">
      <div className="center___name">
        <p className="center___name__account">Пополнение счета</p>
      </div>
      <div className="center___site">
        <p>Tastygo.gg &ensp;|&ensp; Депозит № 87644632</p>
      </div>
      <nav className="center___games">
        
         <NavLink to='/cs_go'>
        <div className='center___games__game1' onClick={(event) => changes(event)}>
          <img src={CS_GO} alt="" className="center___games__game1_icon" />
          <p className="center___games__game1_name">CS:GO</p>
        </div>
        </NavLink>
        <NavLink to="/dota">
        <div className="center___games__game2" onClick={(event) => changes(event)}>
          <img src={Dota} alt="" className="center___games__game2_icon" />
          <p className="center___games__game2_name">DOTA 2</p>
        </div>
        </NavLink>
        <div className="center___games__update">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_744_19171)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.34311 4.34316C2.56636 6.11991 1.79956 8.52332 2.04436 10.8445C2.10229 11.3938 1.704 11.886 1.15476 11.9439C0.605519 12.0018 0.113317 11.6035 0.0553932 11.0543C-0.249997 8.15855 0.70729 5.15055 2.9289 2.92895C6.83414 -0.976296 13.1658 -0.976296 17.071 2.92895C17.4973 3.3552 17.8775 3.81102 18.2114 4.29008C18.5272 4.74318 18.4158 5.36648 17.9627 5.68226C17.5096 5.99804 16.8863 5.88671 16.5705 5.43361C16.3038 5.05085 15.9993 4.68567 15.6568 4.34316C12.5326 1.21897 7.46731 1.21897 4.34311 4.34316Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9999 6V1C18.9999 0.447715 18.5522 0 17.9999 0C17.4476 -1.68587e-07 16.9999 0.447715 16.9999 1L16.9999 4H13.9999C13.4476 4 12.9999 4.44772 12.9999 5C12.9999 5.55228 13.4476 6 13.9999 6H18.9999Z"
                fill="white"
              />
              <g opacity="0.5">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.6569 15.6064C17.4336 13.8296 18.2004 11.4262 17.9556 9.10498C17.8977 8.55574 18.296 8.06354 18.8452 8.00562C19.3945 7.94769 19.8867 8.34598 19.9446 8.89522C20.25 11.791 19.2927 14.799 17.0711 17.0206C13.1659 20.9258 6.83421 20.9258 2.92897 17.0206C2.50271 16.5943 2.12248 16.1385 1.78862 15.6594C1.47285 15.2063 1.58417 14.583 2.03728 14.2673C2.49038 13.9515 3.11368 14.0628 3.42946 14.5159C3.69621 14.8987 4.00067 15.2639 4.34318 15.6064C7.46737 18.7306 12.5327 18.7306 15.6569 15.6064Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.00007 13.9495V18.9495C1.00007 19.5018 1.44778 19.9495 2.00007 19.9495C2.55235 19.9495 3.00006 19.5018 3.00006 18.9495L3.00007 15.9495H6.00007C6.55235 15.9495 7.00007 15.5018 7.00007 14.9495C7.00007 14.3972 6.55235 13.9495 6.00007 13.9495H1.00007Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_744_19171">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="center___games__update_name">Обновить Инвентарь</p>
        </div>
      </nav>
    </div>
  );
};

export default Center;
