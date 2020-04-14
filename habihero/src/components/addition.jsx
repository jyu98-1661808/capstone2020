import React, { Component } from 'react';
import '../styles/Addition.css';

class MathAddition extends Component {
    state = { 
        num1: 0,
        num2: 0
    }
    
    render() { 
        return ( 
            <div id="additionModal" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        {/* <span class="close">&times;</span> */}
                        <h4 class="modal-title">Addition Problem</h4>
                    </div>
                    <div class="modal-body">
                        <div>{this.state.num1} + {this.state.num2} =</div> 
                        {/* // empty box */}
                    </div>
                    <div class="modal-footer">
                        <button type="button" data-dismiss="modal">Answer One</button>
                        <button type="button" data-dismiss="modal">Answer Two</button>
                        <button type="button" data-dismiss="modal">Answer Three</button>
                        <button type="button" data-dismiss="modal">Answer Four</button>
                    </div>
                </div>
            </div>
        );
    }

    // Generates a random integer between 1 and 10
    generateNumber() {
        const numberOne = Math.floor((Math.random() * 10) + 1);
        const numberTwo = Math.floor((Math.random() * 10) + 1);

        // reset state
        this.setState({ 
            num1: numberOne,
            num2: numberTwo,
        });
    }
}
 
export default MathAddition;