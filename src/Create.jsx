import React,{useState} from "react";
import axios from "axios"

function Create(){
    const [Name, setName]=useState()
    const [PhoneNo,setPhoneNo]=useState()
    const[Address,setAddress]=useState()
    const handleAdd=()=>{
        
        axios.post('http://localhost:3001/add',{Name:Name,PhoneNo:PhoneNo,Address:Address})
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }
    return(
        <div>
         <h4>Name</h4>
        <input  type="text" Name="" id=""  placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
        <br/>
        <h4>PhoneNo</h4>
        <input type="text" Phone No="" id="" placeholder="Enter Phone No" onChange={(e) => setPhoneNo(e.target.value)}/>
        <br/>
        <h4>Address</h4>
        <input type="text" Address="" id="" placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)}/>
        <br/>
        <br/>
        <button className="button" type="button" onClick={handleAdd}>submit</button>

        </div>
    )
}
export default Create;