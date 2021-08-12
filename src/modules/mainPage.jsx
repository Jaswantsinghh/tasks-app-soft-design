import {React, useState} from 'react';
import '../index.scss';
import home from '../img/icons/home-page.png';
import hamburger from '../img/icons/square.png';
import plus from '../img/icons/plus.png';
import setting from '../img/icons/settings.png';
import user from '../img/icons/user.png';
import pen from '../img/icons/pencil.png';
import dustbin from '../img/icons/dustbin.png';
import penWhite from '../img/icons/pencil-white.png';

function Card(props)
{
    return(
        <>
        <div className={props.dark ? "cardDark" : "cardFlex"}>
        <div className="cards">
            <div className="header">
            <h1 className={props.dark ? "titleDark" : "titleCard"}>{props.title}</h1>
            <div className={props.color}></div>
            <span className="titleTime">Today 15:04</span>
            </div>
            <p className={props.dark ? "taskDark" : "cardTask"}>{props.one}</p>
            <p className={props.dark ? "taskDark" : "cardTask"}>{props.two}</p>
            <p className={props.dark ? "taskDark" : "cardTask"}>{props.three}</p>
        </div>
        <div className="actionButtons">
<a><img alt="edit"className="penIcon" src={props.dark ? penWhite : pen}></img></a>
<div className={props.dark ? "delDark" : "delete"}><img className="delIcon"alt="delete" src={dustbin}></img></div>
        </div>
        </div>
        </>
    );
}

export default function MainPage()
{
    const [isDark, setDark] = useState(false);
    const toggle = (e)=> { 
        e.preventDefault();
        setDark(!isDark);
    }
    return(
        <>
        <div className={isDark ? "mainDark" : "main"}>
        <div className={isDark ? "mainContDark" : "mainContainer"}>
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
            <div className={isDark ? "cardHolderDark" : "cardHolder"}>
<Card title="Work" dark={isDark} color="blue" one="Respond emails" two="Call Angela" three="Meeting with clients" />
<Card title="Home" dark={isDark} color="green" one="Pay laundry" two="Doing Laundry" three="Cleaning Bathrooms" />
<Card title="Pets" dark={isDark} color="yellow" one="Collar" two="Shampoo" three="Food" />
<Card title="Work" dark={isDark} color="red" one="Respond emails" two="Call Angela" three="Meeting with clients" />
<Card title="Work" dark={isDark} color="yellow" one="Respond emails" two="Call Angela" three="Meeting with clients" />
            </div>
        </div>
        <div className="navWrapper">
<a className="anc"><img className="navIcons" src={home} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={hamburger} alt="home"></img></a>
<a className={isDark ? "ancDark" : "ancMain"}><img className="navIcons" src={plus} alt="home"></img></a>
<a onClick={toggle} className="anc"><img className="navIcons" src={setting} alt="home"></img></a>
<a className="anc"><img className="navIcons" src={user} alt="home"></img></a>
        </div>
        </div>
        
        </>
    );
}