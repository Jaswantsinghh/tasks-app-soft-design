import React from 'react';
import '../index.scss';
import illustration from '../img/illustration.png';
import arrow from '../img/icons/right-arrow.png';
import {
  Link
} from "react-router-dom";
export default function EnterPage()
{
    return(
        <>
        <div className="containerBody">
         <img className="illust" src={illustration} alt="illustration"></img>
         <div className="bodyContent">
           <h1 className="bodyHeading">No more mess.</h1>
           <p className="bodyText">Keep under control your daily<br></br> task!</p>
         <svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlnsXlink="http://www.w3.org/1999/xlink"
 width="1000px" height="400px">
<image  x="0px" y="-600px" width="1000px" height="1000px"  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAYAAABNo9TkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QgJDDsBhYoCEAAAKQJJREFUeNrt3WlzXPd55uHnNNAAFy0UJXnREsmyJXuiTGI7yXyFqfm2k5qqmapJUvMqGU9iS4pla6cWLqIpyVwhAujtPy8OKIAiKULczo3GdVUddaMBNB6RbLJ/Z+1aa60AAACAQY2GHgAAAAAQ6AAAABBBoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECgAwAAQACBDgAAAAEEOgAAAAQQ6AAAABBAoAMAAEAAgQ4AAAABBDoAAAAEEOgAAAAQQKADAABAAIEOAAAAAQQ6AAAABBDoAAAAEECg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" />
</svg>
<div className="buttonWrapper">
    <span><Link to="/main"><img className="arrowRight" alt="arrow" src={arrow}></img></Link></span>
</div>
         </div>
        </div>
        
        </>
    );
}