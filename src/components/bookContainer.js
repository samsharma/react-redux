import React,{ Fragment} from 'react';
import {connect} from 'react-redux';
import { buyBook} from '../redux';

const bookContainer = (props) => {
    return (
        <Fragment>
            <h1>
                Number of Books {props.numberOfBook}
            </h1>
            <button onClick={props.buyBook}>Buy Book</button>
        </Fragment>
    );
};

const mapStatetoprops=(state)=>{
    return{
        numberOfBook:state.numberOfBook
    }
}

const mapDespatchtoProps=(dispatch)=>{
    return{
        buyBook:function(){
            dispatch(buyBook());
        }
    }
}


export default connect(mapStatetoprops, mapDespatchtoProps) (bookContainer);