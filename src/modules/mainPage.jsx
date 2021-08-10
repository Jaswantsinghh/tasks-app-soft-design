import React from 'react';
import '../index.scss';
import home from '../img/icons/home-page.png';
import hamburger from '../img/icons/square.png';
import plus from '../img/icons/plus.png';
import setting from '../img/icons/settings.png';
import user from '../img/icons/user.png';
export default function MainPage()
{
    return(
        <>
        <div className="mainContainer">
            <h1 className="mainHeader">My tasks</h1>
            <div className="mainDates">
              <span className="date">MON 12</span>
              <span className="date">TUE 13</span>
              <span className="date">WED 14</span>
              <span className="dateSelected">THU 15</span>
              <span className="date">FRI 16</span>
              <span className="date">SAT 17</span>
              <span className="date">SUN 18</span>
            </div>
            </div>
            <div className="navBottom">
        <div className="navWrapper">
<a className="anc"><img className="navIcons" src={home} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={hamburger} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={plus} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={setting} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={user} alt="home"></img></a>
        </div>
        </div>
        
        </>
    );
}