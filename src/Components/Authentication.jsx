import React from 'react'
import { useSelector } from 'react-redux';
import LogIn from './LogIn';
import { Outlet } from 'react-router-dom';

export default function Authentication() {

  const myData = useSelector(state => state.myObject);

  if(myData.userId){
    return <Outlet />
  }
  else{
    return <LogIn />
  }
}
