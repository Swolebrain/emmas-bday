import React from "react";

const RsvpForm = ({goTo, submitGuest}) => (
    <div className={"invitation-card"} style={{margin: 'auto 0'}}>
        <h1 className={'t2 yellow'}>RSVP!</h1>

        <form>
            <p className="tagline">Guest Name:</p>
            <input type={'text'} id={'guestName'} />
            <p className="tagline">Number of Guests:</p>
            <input type={'text'} id={'numGuests'} />
        </form>
        <button onClick={submitGuest}>Submit RSVP!</button>
        <h1 className="h1btn" onClick={()=>goTo('guestList')}>see guest list</h1>
    </div>
);

export default RsvpForm;