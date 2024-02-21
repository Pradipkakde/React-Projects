import React from 'react'
import { useState } from 'react';

export default function Todo() {
    const[activity,setActivity]=useState("");
    const[listData,setlistData]=useState([]);
       function addactivity(){
           //setlistData([...listData,activity])
           //console.log(listData)
           setlistData((listData)=>{
               const updatedList=[...listData,activity]
               console.log(updatedList)
               setActivity('');
               return updatedList
           })
      
   }
   function remoteActivity(i){
     const updatedListData=listData.filter((elem,id)=>{
       return i!=id;
     })
     setlistData(updatedListData)
   }
   function removeAll(){
     setlistData([])
   }
     return (
   <>
   <div className='container'>
   <div className='header'> TODO LIST</div>
   <input type="text" placeholder='Add activity' value={activity} onChange={(e)=>setActivity
   (e.target.value)}/>
   <button onClick={addactivity}>Add</button>
   <p className='list-heading'>Here is your List :{")"}</p>
   {listData!=[] && listData.map((data,i)=>{
     return(
       
       <p key={i}>
         <div className="listData">{data}</div>
         <div className='btn-position'><button onClick={()=>remoteActivity(i)}>
           Remove(-)</button></div>
       </p>
       
       
     )
   })}
   {
     listData.length>=1 && <button onClick={removeAll}>Remove All</button>
   }
      
   
   </div>
   
     </>
     )}
   
