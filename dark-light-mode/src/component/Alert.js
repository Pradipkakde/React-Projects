import React from 'react'
import { useState } from 'react';
export default function Alert(props) {
    let[mode,setmode]=useState("dark")
    let[alert,setalert]=useState("");
    let showalert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
    }
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
<strong>{props.alert.type}</strong>:{props.alert.msg} 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
