import axios from "axios";
import { useEffect } from "react";

function FormData({setFormData}) {
  const data = {};
  // useEffect(() => {
  //   console.log("invoked")
  // },[data] )
  let handleChange=(e)=>{
    let id=e.target.id
    let value=e.target.value
    data[id]=value
    console.log(data)
  }
  let handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
    setFormData(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label id="label_name">Name:</label>
        <input id="name" onChange={handleChange} /> <br />
        <label id="label_age">Age:</label>
        <input id="age" type="number" onChange={handleChange}/>
        <br />
        <label id="label_date">Date:</label>
        <input id="dob" type="date" onChange={handleChange}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default FormData;
