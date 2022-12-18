import React from 'react'
import { useContext,useState } from 'react'
import { DataContext } from '../pages/CVBuilder'
export default function Test() {
  const getData= useContext(DataContext)
    const [arr,setArr]= getData.value1
  return (
  <div> {arr}</div>
  );
}
