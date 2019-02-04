import React, {Component, Fragment} from 'react';
import './App.css';
import SvgContainer from "./components/SvgContainer";
import InvitationCard from "./components/InvitationCard";
import RsvpForm from "./components/Form";
import GuestList from "./components/GuestList";
var firebase = require("firebase/app");
require("firebase/firestore");

const config = {
    apiKey: "AIzaSyDOzjoV9dxARc6ZJGWnJcfRJ2yND7ZNp1s",
    databaseURL: "https://emmabirthday-c456a.firebaseio.com",
    projectId: "emmabirthday-c456a",
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

let href = window.location.href;
if (href[href.length-1] === '/') href = href.substring(0, href.length-1);

const imageUris = [
    // href + '/static/svg/candy1.png',
    // href + '/static/svg/candy2.png',
    // href + '/static/svg/candy3.png',
    // href + '/static/svg/candy4.png',
    // href + '/static/svg/candy5.png',
    // href + '/static/svg/candy6.png',
    // href + '/static/svg/candy7.png',
    // href + '/static/svg/candy8.png',
    href + '/static/svg/candy9.png',
    href + '/static/svg/candy10.png',
    href + '/static/svg/green_popsicle.png',
    href + '/static/svg/pink_cone.png',
    href + '/static/svg/pink_milkshake.png',
    href + '/static/svg/sundae.png',
];



class App extends Component {
    state ={
        loading: true,
        submitting: false,
        route: 'invitation'
    }
    images = []
    canvasCandies = []
    NUM_CANDIES_EXPLOSION = 50
    async componentDidMount(){
        this.images = await Promise.all(imageUris.map(preLoadImage));

        this.setState(() => ({ loading: false}));
    }
    chooseRoute(){
        switch (this.state.route) {
            case 'form': return <RsvpForm db={db} goTo={this.goTo} submitGuest={this.submitGuest} />;
            case 'guestList': return <GuestList db={db} goTo={this.goTo} />;
            default: return <InvitationCard goTo={this.goTo}/>;
        }
    }
    submitGuest = async () => {
        console.log("Submitting guest");
        this.setState({submitting:true});
        try{
            const guestNameInput = document.getElementById('guestName');
            const numGuestsInput = document.getElementById('numGuests');
            const guestName = guestNameInput.value;
            const numGuests = numGuestsInput.value;
            if (!guestName || !numGuests){
                alert("Please enter a valid guest Name and number of guests");
                this.setState({submitting: false});
                return;
            }
            const docRef = await db.collection('guests').add({ guestName, numGuests });
            console.log(docRef);
            // alert(`Thanks for RSVPing, ${name}`);
            this.candyExplosionStart();
            this.goTo('guestList');
        }
        catch(e){
            console.log(e);
            alert('Oops! Something went wrong!');
        }
        this.setState({submitting:false});
    }
    candyExplosionStart(){
        document.getElementById("c").classList.remove('displaynone');
        for (let i = 0; i < this.NUM_CANDIES_EXPLOSION; i++){
            let img =this.images[Math.floor(Math.random()*this.images.length)];
            let w = Math.min(window.innerWidth * 0.1, img.width/2);
            let h = (w/img.width) * img.height;
            this.canvasCandies.push({
                x: window.innerWidth / 2 + (Math.random()*50-35),
                y: window.innerHeight /2 + (Math.random()*50-35),
                dx: (Math.random()* 7 + 3) * (Math.random() < 0.5 ? 1 : -1),
                dy: (Math.random()* 7 + 3) * (Math.random() < 0.5 ? 1 : -1),
                w,
                h,
                img
            });
        }
        requestAnimationFrame(this.candyExplosionTick);
    }
    candyExplosionTick= () =>{
        // window.TICKS = (window.TICKS || 0) + 1;
        // if (window.TICKS % 300 === 0) console.log(window.TICKS, this.canvasCandies);
        window.ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        this.canvasCandies.forEach((candy, idx) => {
            candy.x += candy.dx;
            candy.y += candy.dy;
            if (candy.x + candy.w < 0 || candy.x > window.innerWidth || candy.y + candy.h < 0 || candy.y > window.innerHeight){
                this.canvasCandies.splice(idx, 1);
                return;
            }
            window.ctx.drawImage(candy.img, candy.x, candy.y, candy.w, candy.h);
        });
        if (this.canvasCandies.length > 0) requestAnimationFrame(this.candyExplosionTick);
        else document.getElementById("c").classList.add('displaynone');
    }
    goTo = (route) => this.setState(() => ({route}))
    render() {
        if (this.state.loading) return <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Loading...</h1>
        </div>;
        return (
            <Fragment>
                <SvgContainer />
                <div className="App">
                    {this.chooseRoute()}
                </div>
            </Fragment>
        );
    }
}

export default App;



function preLoadImage(uri){
    const img = new Image();
    return new Promise((resolve, reject) => {
        img.onload = () => {
            resolve(img);
        }
        img.onabort = () => reject('Error loading '+uri);
        img.src = uri;
    });
}