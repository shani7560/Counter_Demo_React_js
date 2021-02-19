import React, {Component} from 'react'
import './Demo1.css';
import Display from './Display';

class Demo1 extends Component{
    state ={
        count : 0
    };
    
   
    onInsert = () => {
        console.log('hello');
        this.setState({
            count : this.state.count + 1
        });   
    };
    onDecrement = () => {
        if(this.state.count === 0)
        {
            this.setState({
               
                count: this.state.count = 0
            });    
        }
        else
        {
            this.setState({
                 count: this.state.count - 1
                
            });
        }
     };
    
     onReset = () => {
         this.setState({
             count : this.state.count = 0
         });

    };

    render(){
        return(
            <>
           
            <div className="background1">
            <Display count={this.state.count} 
                     onInsert={this.onInsert}
                     onDecrement={this.onDecrement}
                     onReset={this.onReset}
               
            />
           
            </div>
            </>
        );
        }
    
}

export default Demo1;