import React from 'react';
import '../index.scss';
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
        <div className="navWrapper">
<p>NavBar</p>
<p>NavBar</p>
<p>NavBar</p>
<p>NavBar</p>
<p>NavBar</p>
        </div>
        
        </>
    );
}