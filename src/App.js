import React ,{useState} from "react";
 

const App =()=>{
   const [message ,useMessage ] = useState("Hello user , Good Morning")
       const changeMessage =()=>{
        useMessage(()=>{
            return "Hello user , Good Afternoon"
        })
       }

       return <>
         <div>{message}</div>
         <button onClick={changeMessage}>Change Message</button>
       </>
}

export default App;