// import React, { useState } from 'react';

// function App() {
//   const [person, setPerson] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'bhepworth@sculpture.com'
//   });

//   function handleFirstName(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.value
//     });
//   }
//   function handleLastName(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.value
//     });
//   }
//   function handleEmail(e) {
//     setPerson({
//       ...person,
//       email: e.target.value
//     });
//   }

//   return (
//     <div>
//       <h1>First Name:</h1>
//       <input type="text" value={person.firstName} onChange={handleFirstName} />

//       <h1>Last Name:</h1>
//       <input type="text" value={person.lastName} onChange={handleLastName} />

//       <h1>Email:</h1>
//       <input type="email" value={person.email} onChange={handleEmail} />

//       <p>{person.firstName} {person.lastName} ({person.email})</p>
//     </div>
//   );
// }

// export default App;


                                       // CHILD----->PARENT and parent-->child

  // PARENT
 import React from 'react'
import { useState } from 'react'

function App() {
const [ParentInput,setParentInput]=useState('');

const getDataFromChild = (data)=>{
  console.log("data from child=>",data)
  setParentInput(data)
}
 

   return (
     <div>
        <ChildComponent getDataFromChild={getDataFromChild}/>
        <ChildComponentTwo dataFromParent={ParentInput} />
        <p>data from child-one:{ParentInput}</p>
     </div>
   )
 }
 
 export default App;

//  child one
 const ChildComponent = ({getDataFromChild})=>{
  const [childInput,setChildInput]=useState('');
  const sendDataToParent = ()=>{
    getDataFromChild(childInput)
  }

    return(
      <div>
        <input type="text" value={childInput} onChange={(e)=>setChildInput(e.target.value)} />
        <button onClick={sendDataToParent}>Send data to PARENT</button>
      </div>
    )
  
 }

 //  child two
 const ChildComponentTwo = ({dataFromParent})=>{
  return(
    <div>
        <p> data from child two {dataFromParent}</p>
    </div>
  )
 }
                                     