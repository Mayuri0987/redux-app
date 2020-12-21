import React, { Component } from 'react';
import {connect} from "react-redux";
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreaters from "../../store/actions/index"

class Counter extends Component {
    // state = {
    //     counter: 0,
    //     results:[],
        

    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
               
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractionCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(strRes=>{
                        return  <li key={strRes.id} onClick={()=>this.props.onDeleteResult(strRes.id)}>{strRes.value}</li>
                    })}
                   
                </ul>
            </div>
        );
    }
}   
const mapStateToProps=state=>{
    return{
        ctr:state.ctr.counter,
        storedResult:state.res.results
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onIncrementCounter:()=> dispatch(actionCreaters.increment()),
        onDecrementCounter:()=>dispatch(actionCreaters.decrement()),
        onAdditionCounter:()=>dispatch(actionCreaters.add(5)),
        onSubstractionCounter:()=>dispatch(actionCreaters.substract(5)),
        onStoreResult:(result)=>dispatch(actionCreaters.storeResult(result)),
        onDeleteResult:(id)=>dispatch(actionCreaters.deleteResult(id))

    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);