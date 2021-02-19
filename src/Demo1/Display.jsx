import React, { Component } from 'react'
import './Demo1.css'


class Display extends Component {
    
    render() {
        
        return (
               <> 
                <div className="background">
                   
                    <div className="btnIns">
                         <div className="plus_btn" onClick={this.props.onInsert}>+</div>         
                    </div>
                    <div className="btnCount">
                         <div className="count_btn" >{this.props.count}</div>         
                    </div>
                    <div className="btnDec">
                         <div className="sub_btn" onClick={this.props.onDecrement}>-</div>         
                    </div>
                </div>
                <div className="btnDec">
                         <div className="reset_btn" onClick={this.props.onReset}>Reset</div>         
                </div>
            </>
        )
    }
}
export default Display;