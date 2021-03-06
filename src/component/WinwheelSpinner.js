/* eslint-disable no-undef */
import React, { Component } from 'react'
import MyModal from './Modal';
import VerticalLinearStepper from "./Stepper";


export default class WinwheelSpinner extends Component {
    constructor(...args) {
        super(...args);

        this.state = { 
            modalShow: false, 
            prize: '', 
            startSpin: this.props.startSpin,
         };
    }

    // shouldComponentUpdate() {
    //     return false;
    // }

    setupWinWheel = () => {
        var theWheel = new Winwheel({
            'outerRadius': 212,        // Set outer radius so wheel fits inside the background.
            'innerRadius': 75,         // Make wheel hollow so segments don't go all way to center.
            'textFontSize': 24,         // Set default font size for the segments.
            'drawMode': 'text',
            'textOrientation': 'vertical', // Make text vertial so goes down from the outside of wheel.
            'textAlignment': 'outer',    // Align text to outside of wheel.
            'numSegments': 12,          // Specify number of segments.
            'segments':                 // Define segments including colour and text.
                [                               // font size and test colour overridden on backrupt segments.
                    { 'fillStyle': '#fc89ad', 'text': '300' },
                    { 'fillStyle': '#d98fe2', 'text': '450' },
                    { 'fillStyle': '#9161d9', 'text': '600' },
                    { 'fillStyle': '#0096f9', 'text': '750' },
                    { 'fillStyle': '#87cafe', 'text': '500' },
                    { 'fillStyle': '#a3ff92', 'text': '500' },
                    { 'fillStyle': '#fc89ad', 'text': '400' },
                    { 'fillStyle': '#d98fe2', 'text': '900' },
                    { 'fillStyle': '#9161d9', 'text': '600' },
                    { 'fillStyle': '#0096f9', 'text': '700' },
                    { 'fillStyle': '#87cafe', 'text': '800' },
                    { 'fillStyle': '#a3ff92', 'text': '360', 'textFontSize': 12 }
                ],
            'animation':           // Specify the animation to use.
            {
                'type': 'spinToStop',
                'duration': 2,    // Duration in seconds.
                'spins': 1,     // Default number of complete spins.
                'callbackFinished': this.alertPrize,
                'callbackSound': this.playSound,   // Function to call when the tick sound is to be triggered.
                'soundTrigger': 'pin'             // Specify pins are to trigger the sound, the other option is 'segment'.
            },
            'pins':				// Turn pins on.
            {
                'number': 12,
                'fillStyle': 'white',
                'outerRadius': 4,
            }
        });
        
        // // Create new image object in memory.
        // let loadedImg = new Image();

        // // Create callback to execute once the image has finished loading.
        // loadedImg.onload = function () {
        //     theWheel.wheelImage = loadedImg;    // Make wheelImage equal the loaded image object.
        //     theWheel.draw();                    // Also call draw function to render the wheel.
        // }

        // // Set the image source, once complete this will trigger the onLoad callback (above).
        // loadedImg.src = "wheel.png";

        return theWheel;
    }


    componentDidMount() {
        this.setupWinWheel();
    }

    startSpin() {
        // Vars used by the code in this page to do power controls.
        let wheelPower = 0;
        let wheelSpinning = false;

        let theWheel = this.setupWinWheel();

        // Ensure that spinning can't be clicked again while already running.
        if (wheelSpinning === false) {
            // Based on the power level selected adjust the number of spins for the wheel, the more times is has
            // to rotate with the duration of the animation the quicker the wheel spins.
            if (wheelPower === 1) {
                theWheel.animation.spins = 3;
            } else if (wheelPower === 2) {
                theWheel.animation.spins = 6;
            } else if (wheelPower === 3) {
                theWheel.animation.spins = 10;
            }

            // // Disable the spin button so can't click again while wheel is spinning.
            // document.getElementById('spin_button').src       = "spin_off.png";
            // document.getElementById('btnSpinWheel').className = "button disabled";

            // Begin the spin animation by calling startAnimation on the wheel object.
            theWheel.startAnimation();

            // Set to true so that power can't be changed and spin button re-enabled during
            // the current animation. The user will have to reset before spinning again.
            wheelSpinning = true;
        }
    }

    playSound = () => {
        // Loads the tick audio sound in to an audio object.
        let audio = new Audio('tick.mp3');

        // Stop and rewind the sound if it already happens to be playing.
        audio.pause();
        audio.currentTime = 0;

        audio.play();
    }

    alertPrize = (indicatedSegment) => {
        this.setState({ modalShow: true, prize: indicatedSegment.text });
        
        console.log('Modal State:', this.state.modalShow);
        console.log('Prize:', indicatedSegment.text);
    }

    render() {
        const renderStepper = () => <VerticalLinearStepper />;

        let modalClose = () => this.setState({ modalShow: false });
        console.log('Prop startSpin is: ', this.props.startSpin);

        if (this.state.startSpin) {
            this.startSpin();
        }

        // const customStyle =
        // {
        //     'backgroundImage': 'url(./wheel_back.png)',
        //     'backgroundPosition': 'center',
        //     'backgroundRepeat': 'none',
        //     'backgroundRepeatX': 'no-repeat',
        //     'paddingTop': '6px'
        // }

        return (
            <>
                <div>
                    <div>
                        <a id="btnSpinWheel" href="#" className={"button " + (this.props.disableButton ? "disabled" : "")} onClick={() => this.startSpin()}>SPIN</a>
                    </div>
                    <i className="arrow down"></i>
                </div>

                <canvas id='canvas' width='500' height='500'>
                    Canvas not supported, use another browser.
                </canvas>
                <MyModal
                    show={this.state.modalShow}
                    title={"Congratulations, you won " + this.state.prize}
                    description={"Please, fill out these two steps to get your prize."}
                    onHide={modalClose}
                    content={renderStepper()}
                    showCloseButton={false} />
            </>
        )
    }
}
