import React,{ Fragment, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { buyBook} from '../redux';


const HookBookContainer = () => {
const [number, setNumber]=useState(1);
const numberOfBook=useSelector(state=>state.numberOfBook);
const dispatch =useDispatch();

    return (
        <Fragment>
            <h1> Hook Container</h1>
            <h2>Number of Book {numberOfBook} </h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyBook(number))}>Buy Book </button>
        </Fragment>
    );
};

export default HookBookContainer;