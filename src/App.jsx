//===================================     3    ==============================================================




// import { useState } from "react";

// const App=()=>{

// const [input,setInput]=useState({});  //input={}
// //input={rollno:121,name:"sachin",city:"bhopal",fess:34000}
// const handleInput=(e)=>{

//   let name=e.target.name;
//   let value=e.target.value;
//   setInput(values=>({...values,[name]:value}));
//   console.log(input);
// }
// return(
//   <>
//   <h1>application form</h1>
//   enter rollno:<input type="text" name="rollno" onChange={handleInput} />
//   <br/>
//   enter name:<input type="text" name="name" onChange={handleInput} />
//   <br/>
//   enter city:<input type="text" name="city" onChange={handleInput} />
//   <br/>
//   enter fees:<input type="text" name="fees" onChange={handleInput} />
//   <br/>
//   <button>data save</button>
//   </>
// )
// }

// export default App;



///===============================  1  =========================================================

// import { useState } from "react";
// const App=()=>{

//   const [name,setName]=useState("");
//   const [city,setCity]=useState("");
//     const handleSubmit=()=>{
//       alert("name:"+name+"city:"+city);
//     }
//     return(
//       <>
//       <h1>application form</h1>
//       enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
//       <br/>
//       enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//       <br/>
//       <button onClick={handleSubmit}>save!</button>
      
//       </>
//     )
  
// }

// export default App;



///==============================================  2    ==========================================

import { useState } from "react";
const App=()=>{

  const [rollno,setRollno]=useState("");
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const [fees,setFees]=useState("");

  const handleSubmit=()=>{

    console.log({rollno:rollno,name:name,city:city,fees:fees});
  }
  return(
    <>
    <h1>application form</h1>
    enter rollno:<input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}} />
    <br/>
    enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    <br/>
    enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
    <br/>
    enter fees:<input type="text" value={fees} onChange={(e)=>{setFees(e.target.value)}} />
    <br/>
    <button onClick={handleSubmit}>data save</button>

    </>
  )

}


export default App;