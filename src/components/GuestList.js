import React from "react";
import PropTypes from "prop-types";


export default class GuestList extends React.Component{
    state ={
        guests: []
    }
    static propTypes = {
        db: PropTypes.object.isRequired,
        goTo: PropTypes.func.isRequired
    }
    async componentDidMount(){
        const {db} = this.props;
        const guestsSnapshot = await db.collection('guests').get();
        console.log(guestsSnapshot);
        const guests = [];
        console.log(guests);
        guestsSnapshot.forEach(doc => guests.push({...doc.data()}));
        this.setState({guests})
    }
    render(){
        return (
            <div className={"invitation-card"} style={{margin: 'auto 0'}}>

                <h1 className={'t2 yellow'}>Guest List</h1>

                <div className="row">
                    <div className={"tagline lightblue"}>Who?</div>
                    <div className={"tagline lightblue"}>#Guests</div>
                </div>
                {
                    this.state.guests.map(({guestName, numGuests}, gIdx) => (
                        <div className="row" key={gIdx}>
                            <div className={"tagline"}>{guestName}</div>
                            <div className={"tagline"}>{numGuests}</div>
                        </div>
                    ))
                }
                <div className="tagline">Total Guests: {this.state.guests.reduce((acc, {numGuests}) => acc + (Number(numGuests)||0), 0)}</div>
                <h1 className="h1btn" onClick={()=>this.props.goTo('home')}>back</h1>
            </div>
        );
    }
}