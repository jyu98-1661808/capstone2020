import React, { Component } from 'react';

class MathAddition extends Component {
    state = { 
        num1: 0,
        num2: 0
    }
    
    render() { 
        return ( 
            <div id="additionModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    {/* Modal Content */}
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Addition Problem</h4>
                        </div>
                        <div class="modal-body">
                            <div class="col-sm-2">{this.state.num1}</div>
                            <div class="col-sm-2">+</div>
                            <div class="col-sm-2">{this.state.num2}</div>
                            <div class="col-sm-2">=</div>
                            <div class="col-sm-4" style={{outline: '2px'}}></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
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