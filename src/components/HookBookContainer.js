import React,{ Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyBook} from '../redux';


const HookBookContainer = () => {

const numberOfBook=useSelector(state=>state.numberOfBook);
const dispatch =useDispatch();

    return (
        <Fragment>
            <h1> Hook Container</h1>
            <h2>Number of Book {numberOfBook} </h2>
            <button onClick={()=>dispatch(buyBook())}>Buy Book </button>
        </Fragment>
    );
};

export default HookBookContainer;