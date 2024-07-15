import React from 'react'
import './Pill.css'
export const Source = (props) => {
  return (
    <>
    <div className="outerBox">
        <div className="inner"><a href={props.gitLink}><img src="githubIconOrg.svg" alt="" className='pillIcon' /></a></div>
        <div className="inner"><a href={props.liveLink}><img src="liveIcon.svg" alt="" className='pillIcon' /></a></div>
        <div className="inner"><a href={props.ytLink}><img src="youtubeIcon.svg" alt="" className='pillIcon' /></a></div>
    </div>
    </>
    )
}
