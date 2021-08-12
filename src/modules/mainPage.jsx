import React from 'react';
import '../index.scss';
import home from '../img/icons/home-page.png';
import hamburger from '../img/icons/square.png';
import plus from '../img/icons/plus.png';
import setting from '../img/icons/settings.png';
import user from '../img/icons/user.png';
import pen from '../img/icons/pencil.png';
import dustbin from '../img/icons/dustbin.png';

function Card(props)
{
    return(
        <>
        <div className="cardFlex">
        <div className="cards">
            <div className="header">
            <h1 className="titleCard">{props.title}</h1>
            <div className={props.color}></div>
            <span className="titleTime">Today 15:04</span>
            </div>
            <p className="cardTask">{props.one}</p>
            <p className="cardTask">{props.two}</p>
            <p className="cardTask">{props.three}</p>
        </div>
        <div className="actionButtons">
<a><img alt="edit"className="penIcon" src={pen}></img></a>
<div className="delete"><img className="delIcon"alt="delete" src={dustbin}></img></div>
        </div>
        </div>
        </>
    );
}

export default function MainPage()
{
    return(
        <>
        <div className="main">
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
            <div className="cardHolder">
<Card title="Work" color="blue" one="Respond emails" two="Call Angela" three="Meeting with clients" />
<Card title="Home" color="green" one="Pay laundry" two="Doing Laundry" three="Cleaning Bathrooms" />
<Card title="Pets" color="yellow" one="Collar" two="Shampoo" three="Food" />
<Card title="Work" color="red" one="Respond emails" two="Call Angela" three="Meeting with clients" />
<Card title="Work" color="yellow" one="Respond emails" two="Call Angela" three="Meeting with clients" />
            </div>
        </div>
        <div className="navWrapper">
<a className="anc"><img className="navIcons" src={home} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={hamburger} alt="home"></img></a>
<a className="ancMain"><img className="navIcons" src={plus} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={setting} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={user} alt="home"></img></a>
        </div>
        </div>
        
        </>
    );
}