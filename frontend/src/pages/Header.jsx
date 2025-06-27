import React from 'react'
import {getUserData} from '../Services/Data';

function Header() {
    console.log("getUserData is", getUserData());
  return (
    <div>Header</div>
  )
}

export default Header