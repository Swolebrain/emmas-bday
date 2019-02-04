import React from "react";

function getAnimDelay(){
    if (window.location.href.indexOf('localhost') === -1) return 'delayed-anim';
    return '';
}

const InvitationCard = ({goTo}) => (
    <div className={`invitation-card ${getAnimDelay()}`}>
        <h1 className={'t1 lightblue'}>here's</h1>
        <h1 className={'t2 yellow'}>the</h1>
        <h1 className={'t3 hotpink'}>scoop!</h1>
        <p className={'tagline'}>A little ice cream and a lot of fun!</p>
        <h1 className={'emma'}>
            <span className={'pink'}>E</span>
            <span className={'yellow'}>M</span>
            <span className={'lightblue'}>M</span>
            <span className={'pink'}>A</span>
        </h1>
        <p className="tagline">is turning <span className={'t3 hotpink'}>1</span></p>
        <p className="tagline">Sunday February 17th at 1:30</p>
        <p className="tagline">7270 SW 15th st, Miami, FL 33144</p>
        <br/>
        <button onClick={()=>goTo('form')}>Click to RSVP!</button>
    </div>
);

export default InvitationCard;