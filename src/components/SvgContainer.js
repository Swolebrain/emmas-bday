import React from "react";
import rocketCarrot from './rocketCarrot.svg';

class SvgContainer extends React.Component {
    componentDidMount(){
        document.querySelector('body').dispatchEvent(window.reactBuiltEvent);
    }
    render() {
        return (
            <div id="svg-container">
                <svg className="rocketManSVG"
                     viewBox="0 0 600 600">


                    <polygon className="star" opacity="0.5" fill="#BB907B"
                             points="1.2,0 1.6,0.8 2.4,0.9 1.8,1.5 1.9,2.3 1.2,1.9 0.5,2.3 0.6,1.5 0,0.9 0.8,0.8 "/>
                    <g className="starContainer"></g>
                    <g className="satellite"></g>


                    <g className="speedLines" stroke="#FF69B4" strokeWidth="2" strokeLinejoin="round">
                        <line id="speedLine0" fill="none" strokeMiterlimit="10" x1="252.5" y1="324" x2="252.5"
                              y2="566"/>
                        <line id="speedLine1" fill="none" strokeMiterlimit="10" x1="299.5" y1="500" x2="299.5"
                              y2="557"/>
                        <line id="speedLine2" fill="none" strokeMiterlimit="10" x1="347.5" y1="324" x2="347.5"
                              y2="529"/>
                        <line id="speedLine3" fill="none" strokeMiterlimit="10" x1="74.5" y1="45" x2="74.5" y2="500"/>
                        <line id="speedLine4" fill="none" strokeMiterlimit="10" x1="544.5" y1="29" x2="544.5" y2="574"/>
                        <line id="speedLine5" fill="none" strokeMiterlimit="10" x1="415.5" y1="8" x2="415.5" y2="440"/>
                        <line id="speedLine6" fill="none" strokeMiterlimit="10" x1="165.5" y1="142" x2="165.5"
                              y2="574"/>
                    </g>
                    <rect x="275" y="263.3" clipPath="url(#rainbowClip)" fill="#CC583F" width="10" height="212.7"/>
                    <rect x="285" y="263.3" clipPath="url(#rainbowClip)" fill="#ECB447" width="10" height="212.7"/>
                    <rect x="295" y="263.3" clipPath="url(#rainbowClip)" fill="#75C095" width="10" height="212.7"/>
                    <rect x="305" y="263.3" clipPath="url(#rainbowClip)" fill="#5991AA" width="10" height="212.7"/>
                    <rect x="315" y="263.3" clipPath="url(#rainbowClip)" fill="#7D6AAD" width="10" height="212.7"/>


                    <g className="astronaut">

                        <g className="pulseSVG" opacity="0.2" stroke="#ededed">
                            <path className="pulse" fill="none" strokeWidth="3" strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  d="M289.9,188.7
        c5.2-5.2,13.7-5.2,18.9,0"/>
                            <path className="pulse" fill="none" strokeWidth="3" strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  d="M285.6,184.5
        c7.6-7.6,19.8-7.6,27.4,0"/>
                            <path className="pulse" fill="none" strokeWidth="3" strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  d="M281.4,180.3
        c9.9-9.9,26-9.9,35.9,0"/>
                        </g>
                        <g id='ice-cream' x="220" y="200" transform="translate(212,130) rotate(-21)">
                            <path className="ice-cream__cream" d="M21,101.7c-4.9,3.5-9.8,5.5-15.5,3.4c-4.7-1.8-6-5.1-2.3-8.3c3.6-3.2,3.7-6.6,4-10.9
		c1.4-16.7,12-26.6,26.6-33.7c-0.1,0.2,0.2-0.2,0.2-0.5c-0.9-13.5,2.4-18.3,15.5-22c6.6-1.9,13.3-3.2,19.8-5.4c3-1,6.7-3.2,7.6-5.7
		c1.1-2.9,0.3-7.5-1.5-9.9c-1.1-1.4-6,0.3-9.3,0.5c0.1-2.9,2.9-5.2,6.2-6.7c9.2-4.2,17.9-3,25.5,3.7c13.6,11.8,19.6,37.9,12.4,54.5
		c-1.1,2.5-2.5,5.3-4.6,7c-3.2,2.6-2.8,5-1.4,8.2c3.4,7.7,4.8,15.8,4,24.2c-0.8,8.2-4.3,14.7-12.2,19.1c1.7,5.3,3,10.9-3.6,14.2
		c-3.9,1.9-5.8,0.5-15.1-9.7c-13.5,9.2-26.8,6.1-35.7-8.2c-0.8-1.3-2.5-2.8-3.8-2.7C25.1,112.8,25.1,112.9,21,101.7z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M29.7,151.5c3.2,6,6.1,11.5,9.4,17.7c-8,3.2-15.8,6.4-23.9,9.6c-2.7-5.1-5.4-9.8-7.6-14.7
		c-0.5-1,0.6-3.8,1.7-4.2C15.9,156.9,22.7,154.3,29.7,151.5z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M15.9,180.3c8-3.2,15.8-6.3,23.8-9.5c0.1,0,1.8,3.2,2,3.5c0.6,1.1,1,2.2,1.6,3.2c0.8,1.4,1.6,2.9,2.3,4.3
		c0.4,0.7-0.1,1.2-0.5,1.8c-0.8,1.4-1.5,2.8-2.3,4.2c-0.5,1-0.8,1.5-1.8,2c-0.7,0.3-1.5,0.7-2.2,1.1c-0.9,0.5-1.8,1-2.7,1.6
		c-0.8,0.6-1.7,0.9-2.6,1.3c-2.9,1.2-5.8,2.3-8.6,3.5C22,191.6,19,186.1,15.9,180.3z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M60.5,160.8c-6.7,2.7-13,5.2-19.5,7.8c-3.2-6-6.2-11.7-9.4-17.7c6.6-2.6,12.9-5.1,19.5-7.7
		C54.3,149.1,57.3,154.7,60.5,160.8z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M33.7,128.5c0.6-0.2,1.2-0.4,1.8-0.6c1.6-0.7,3.1-1.3,4.7-1.9c0.3,0.9,0.6,1.4,1.2,1.9
		c1.8,1.7,4.3,2.8,5.8,4.7c0.2,0.3,0.3,0.6,0.5,0.9c0.7,1.8,1.4,3.5,2.1,5.3c0.2,0.6,0.5,1.2,0.2,1.8c-0.5,1-1.6,1.7-2.6,2
		c-5.3,2.2-10.6,4.4-16.4,6.7c-2.8-5.3-5.5-10.3-8.3-15.4c3-1.6,6-3.2,9.1-4.7C32.4,128.9,33,128.7,33.7,128.5z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M13,227.8C9.5,221,6.2,214.9,2.6,208c7.3-3,14.2-5.8,21-8.6c5.3,6.7,5.3,6.7,0.6,13.1
		C20.7,217.4,17.1,222.2,13,227.8z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M18,135.6c0.6-0.2,1.2-0.5,1.8-0.7c0.1,0,0.3-0.1,0.4,0c0.1,0,0.2,0.1,0.2,0.2c1.7,2.3,3.1,4.5,4.5,7.1
		c0.4,0.7,4,7.9,4.1,7.9c-7.2,2.9-14.1,5.6-21.7,8.7c0.3-0.1,0.2-3.5,0.2-3.9c0.1-1.3,0.2-2.6,0.2-3.9c0.2-2.6,0.3-5.2,0.6-7.8
		c0.1-0.9-0.1-2.7,0.5-3.4c0.6-0.8,2.3-1.2,3.2-1.6C14.1,137.2,16.1,136.4,18,135.6z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M3.3,206c0.2-2.5,0.2-4.9,0.3-7.4c0.1-2.1,0.3-4.2,0.5-6.3c0.2-1.7,0.5-3.3,0.5-5c0-0.2,0-0.4,0.1-0.6
		c0.1-0.2,0.2-0.3,0.2-0.5c0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.5,0.2-0.8c0.3-0.7,0.3-1.4,1.2-1.7c1.3-0.5,2.7-1.1,4-1.6
		c0.7-0.3,1.4-0.6,2.1-0.9c0.4-0.1,0.7-0.3,1.1-0.4c0.4-0.2,0.4-0.2,0.7,0.2c0.9,1.2,1.4,2.5,2.1,3.8c0.8,1.5,1.6,3,2.4,4.5
		c1.5,2.9,3.1,5.7,4.6,8.6c0,0.1,0.1,0.2,0.1,0.3C16.8,200.5,10.6,203,3.3,206z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M62.3,160.7c-1.9-3.6-3.8-7.2-5.7-10.9c-1-1.8-1.9-3.6-2.9-5.4c-0.9-1.6-1.3-2.2,0.4-3.4
		c1.7-1.2,3.6-2.2,5.4-3.2c0.6-0.4,1.2-0.7,1.9-0.9c1.3-0.3,2.9,0,4.3-0.2c1.2-0.1,3-0.9,4.3-1c2.7-0.6,4.5-1.5,6.9-3.1
		c0.7,1.4,2.9,4,2.3,5.4c-0.7,1.7-2.4,3.1-3.5,4.6c-1.4,1.9-2.9,3.9-4.3,5.8C68.3,152.6,65.3,156.7,62.3,160.7z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M33,126.4c-1.8,0.8-3.5,1.6-5.3,2.3c-1,0.5-2.1,0.9-3.1,1.4c-0.5,0.2-1.1,0.5-1.6,0.7
		c-0.3,0.1-1.1,0.7-1.5,0.6c-0.5-0.1-1-1.5-1.2-1.9c-0.4-0.8-0.8-1.5-1.2-2.3c-0.8-1.5-1.6-3.1-2.4-4.6c-1.6-3.1-3.2-6.3-4.7-9.5
		c-0.5-1.1,1.2-3.2,1.9-4.8c0.5,0.1,1,0.2,1.5,0.3c0.6,1.9,1.2,3.8,1.8,5.7c2.4,7.1,6.3,9.3,13.7,7.7c1.8-0.4,4-1.3,5.8-0.6
		c0.5,0.2,1,0.6,1.4,1.1c0.2,0.3,0.9,1.1,0.7,1.5c-0.1,0.4-1.3,0.7-1.6,0.8c-0.6,0.2-1.2,0.3-1.8,0.5c-0.4,0.2-0.9,0.4-1.3,0.6
		C33.6,126.1,33.3,126.3,33,126.4z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M0,243.5c0.8-9.9,1.7-19.8,2.5-29.7c0.3-0.1,0.6-0.3,0.9-0.4c2.7,4.9,5.3,9.8,7.9,14.8
		c0.3,0.5,0.2,1.5-0.1,1.9c-3.4,4.7-6.9,9.3-10.3,14C0.6,243.9,0.3,243.7,0,243.5z"/>
                            <path className="ice-cream__cone" fill="#434343"
                                  d="M41.8,170c6.3-2.5,12.1-4.8,19.4-7.7c-5,6.8-9.1,12.4-13.6,18.6C45.4,176.9,43.7,173.6,41.8,170z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M17.8,134.5c-1.8,0.7-3.5,1.4-5.3,2.2c-0.8,0.3-1.6,0.5-2.4,0.9c-0.4,0.2-0.8,0.5-1.2,0.8
		c-0.2-1,0.2-2,0.3-3c0.2-0.9,0.2-1.8,0.3-2.7c0.1-1.8,0.3-3.6,0.4-5.4c0.1-1.9,0.3-3.8,0.4-5.7c0.1-1,0.1-2,0.2-3.1
		c0-0.6,0.5-2.3,0.2-2.8c1.7,3.1,3.5,6.3,5.2,9.4c0.9,1.7,1.7,3.5,2.6,5.2c0.2,0.4,0.4,0.8,0.6,1.2c0.1,0.1,0.1,0.3,0.2,0.4
		c0.1,0.4,0.6,1.5,0.4,1.9C19.5,134,18.3,134.3,17.8,134.5z"/>
                            <path className="ice-cream__cone" fill="#434343"
                                  d="M13.7,179.4c-2.9,1.2-5.3,2.1-8.6,3.4c0.5-5.6,1-10.2,1.5-16.3C9.4,171.4,11.4,175.1,13.7,179.4z"/>
                            <path className="ice-cream__cone" fill="#434343" d="M29.3,205.5c-1.2-2.4-2.1-4.3-3.4-6.8c3.7-1.5,7-2.9,10.4-4.3c0.2,0.3,0.4,0.6,0.6,0.9
		C34.4,198.6,32,201.9,29.3,205.5z"/>
                        </g>

                        <g className="jetBubbles">

                            <g id="colorJets" strokeWidth="0" stroke="#3d3d3d">
                                <circle className="jetBubble" fill="#ECB447" cx="312" cy="449" r="8"/>
                                <circle className="jetBubble" fill="#7D6AAD" cx="320" cy="480" r="10"/>
                                <circle className="jetBubble" fill="#7D6AAD" cx="290" cy="460" r="10"/>
                                <circle className="jetBubble" fill="#ECB447" cx="329" cy="453" r="11"/>
                                <circle className="jetBubble" fill="#CC583F" cx="286" cy="463" r="7"/>
                                <circle className="jetBubble" fill="#ECB447" cx="289" cy="469" r="24"/>
                                <circle className="jetBubble" fill="#7D6AAD" cx="260" cy="450" r="20"/>
                                <circle className="jetBubble" fill="#5991AA" cx="319" cy="463" r="10"/>
                                <circle className="jetBubble" fill="#CC583F" cx="290" cy="463" r="18"/>
                                <circle className="jetBubble" fill="#75C095" cx="312" cy="443" r="21"/>

                                <circle className="jetBubble" fill="#5991AA" cx="275" cy="443.4" r="12"/>
                            </g>


                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}


export default SvgContainer;