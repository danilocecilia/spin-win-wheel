/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

export default class WinwheelSpinner extends Component {
    shouldComponentUpdate() {
        return false;
    }


    setupWinWheel = () => {
        return new Winwheel({
            'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
            'innerRadius'     : 75,         // Make wheel hollow so segments don't go all way to center.
            'textFontSize'    : 24,         // Set default font size for the segments.
            'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
            'textAlignment'   : 'outer',    // Align text to outside of wheel.
            'numSegments'     : 17,         // Specify number of segments.
            'segments'        :             // Define segments including colour and text.
            [                               // font size and test colour overridden on backrupt segments.
               {'fillStyle' : '#ee1c24', 'text' : '300'},
               {'fillStyle' : '#3cb878', 'text' : '450'},
               {'fillStyle' : '#f6989d', 'text' : '600'},
               {'fillStyle' : '#00aef0', 'text' : '750'},
               {'fillStyle' : '#f26522', 'text' : '500'},
               {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
               {'fillStyle' : '#e70697', 'text' : '3000'},
               {'fillStyle' : '#fff200', 'text' : '600'},
               {'fillStyle' : '#f6989d', 'text' : '700'},
               {'fillStyle' : '#f6989d', 'text' : '500'},
               {'fillStyle' : '#f26522', 'text' : '400'},
               {'fillStyle' : '#3cb878', 'text' : '900'},
               {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
               {'fillStyle' : '#a186be', 'text' : '600'},
               {'fillStyle' : '#fff200', 'text' : '700'},
               {'fillStyle' : '#00aef0', 'text' : '800'},
               {'fillStyle' : '#ffffff', 'text' : 'LOOSE TURN', 'textFontSize' : 12}
            ],
            'animation' :           // Specify the animation to use.
            {
                'type'     : 'spinToStop',
                'duration' : 10,    // Duration in seconds.
                'spins'    : 3,     // Default number of complete spins.
                // 'callbackFinished' : alertPrize,
                'callbackSound'    : this.playSound,   // Function to call when the tick sound is to be triggered.
                'soundTrigger'     : 'pin'             // Specify pins are to trigger the sound, the other option is 'segment'.
            },
            'pins' :				// Turn pins on.
            {
                'number'     : 17,
                'fillStyle'  : 'silver',
                'outerRadius': 4,
            }
        });
    }

    componentDidMount() {
        this.setupWinWheel();
    }

    startSpin()
    {
        // Vars used by the code in this page to do power controls.
        let wheelPower    = 0;
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
            // document.getElementById('spin_button').className = "";

            // Begin the spin animation by calling startAnimation on the wheel object.
            theWheel.startAnimation();

            // Set to true so that power can't be changed and spin button re-enabled during
            // the current animation. The user will have to reset before spinning again.
            wheelSpinning = true;
        }
    }

    // This function is called when the sound is to be played.
    playSound = () =>
    {
        // Loads the tick audio sound in to an audio object.
        let audio = new Audio('tick.mp3');
        // Stop and rewind the sound if it already happens to be playing.
        audio.pause();
        audio.currentTime = 0;

        // Play the sound.
        audio.play();
    }

  render() {
    const style = 
    {
        'background-image': 'url(./wheel_back.png)',
        'background-position': 'center',
        'background-repeat': 'none',
        'background-repeat-x': 'no-repeat',
        'padding-top': '6px'
    }   

    return (
        <>
            <Row>
                <Col>
                    <div class="text-center">
                        <img class="rounded" id="spin_button" src="spin_off.png" alt="Spin" onClick={() => this.startSpin()} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <table>
                        <tr>
                            <td style={style}>
                                <canvas id='canvas' width='880' height='500'>
                                    Canvas not supported, use another browser.
                                </canvas>
                            </td>
                        </tr>
                    </table>
                </Col>
            </Row>
        </>
    )
  }
}
