

import Wrapper from "./Wrapper";
import Buttons from "./Buttons";
import Input from "./Input";
import { useState } from "react";





function App() {
  const [val1,setVal1]=useState()
  const [val2,setVal2]=useState()
  // console.log(val1)
  const [result,setResult]=useState("0")


   const resetBtn=()=>{
    console.log("clearrrrrr")
    setResult("")
   resetValue()
   }
   const resetValue=()=>{
    setVal1("")
    setVal2("")
   }

  
   const calculation=(symbol,setVal1,setval2)=>{
    let total;
    // console.log("symbol",symbol)
    // console.log(val1,val2)
    //  console.log("v1:",typeof val1,"v2:",typeof val2)
    //  console.log(val1+val2)
   
  if (symbol == '+' ) {
    
      total =val1 + val2;
      setResult(total)
      resetValue()
    
      console.log(total)
  }
  else if (symbol == '-') {
      total = val1 - val2;
      setResult(total)
      resetValue()
  }
  else if (symbol == '*') {
      total = val1 *val2;
      setResult(total)
      resetValue()
  }
  else {
      total = val1 / val2;
      setResult(total)
      resetValue()
  }
    


   }
   
  return (
    <>
    <Wrapper>
     <Input result={result} ></Input>
     <div >
        
        <input  value={val1} onChange={(e)=>setVal1(Number(e.target.value) )} />
       <input  value={val2} onChange={(e)=>setVal2(Number(e.target.value))} />
       </div>
     <Buttons  symbol="+" onClick={(e)=>e.target.value} handleClick={calculation}  > </Buttons>
     <Buttons  symbol="-" handleClick={calculation} > </Buttons>
     <Buttons  symbol="*" handleClick={calculation}> </Buttons>
     <Buttons  symbol="%" handleClick={calculation} > </Buttons>
     <Buttons symbol="clear" id="clear-btn"  handleClick={resetBtn}></Buttons>

    </Wrapper>
   </>
  ); 
}

export default App;
